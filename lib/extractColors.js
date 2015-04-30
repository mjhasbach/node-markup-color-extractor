var fs = require('fs'),
    _ = require('lodash'),
    cheerio = require('cheerio'),
    tinycolor = require('tinycolor2'),
    request = require('request');

var extractColors = module.exports = {
    _validateOptions: function(opt) {
        if (!_.isPlainObject(opt)) {
            throw new TypeError('opt must be an object');
        }

        if (!_.isFunction(opt.cb)) {
            throw new TypeError('opt.cb must be a function');
        }
    },
    from: {
        buffer: function(opt) { extractColors.from.string(opt); },
        string: function(opt) {
            extractColors._validateOptions(opt);

            if (_.isString(opt.string) || Buffer.isBuffer(opt.buffer)) {
                var colors = [],
                    $ = cheerio.load(opt.string || opt.buffer, opt);

                $('*').each(function() {
                    if (opt.text === true){
                        var text = $(this).text();

                        if (tinycolor(text).isValid()) {
                            colors.push(text);
                        }
                    }
                    if (opt.attributes === true || _.isArray(opt.attributes)){
                        _.each(this.attribs, function(val, attr) {
                            if (opt.attributes === true || _.contains(opt.attributes, attr)) {
                                if (tinycolor(val).isValid()) {
                                    colors.push(val);
                                }
                            }
                        });
                    }
                });

                opt.cb(null, opt.unique === false ? colors : _.uniq(colors));
            }
            else {
                opt.cb(new TypeError('Either opt.string must be a string or opt.buffer must be a buffer'));
            }
        },
        file: function(opt) {
            extractColors._validateOptions(opt);

            if (_.isString(opt.file)) {
                fs.readFile(opt.file, function(err, data) {
                    if (err) {
                        opt.cb(new Error('Unable to read file'));
                    }
                    else {
                        extractColors.from.buffer(_.extend(opt, {buffer: data}));
                    }
                });
            }
            else {
                opt.cb(new TypeError('opt.file must be a string'));
            }
        },
        url: function(opt) {
            extractColors._validateOptions(opt);

            if (_.isString(opt.url)) {
                request(opt.url, function(err, res, markup) {
                    if (err || res.statusCode !== 200) {
                        opt.cb(new Error('Unable to download markup file'));
                    }
                    else {
                        extractColors.from.string(_.extend(opt, {string: markup}));
                    }
                });
            }
            else {
                opt.cb(new TypeError('opt.url must be a string'));
            }
        }
    }
};