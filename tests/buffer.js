var fs = require('fs'),
    should = require('chai').should(),
    common = require('./common'),
    extractColors = require('../lib/extractColors');

describe('node-markup-color-extractor (extractColors.from.buffer)', function() {
    it('should extract colors from a buffer', function(done) {
        fs.readFile(common.xmlFile.path, function(err, data) {
            should.not.exist(err);

            extractColors.from.buffer({
                buffer: data,
                attributes: true,
                text: true,
                cb: function(err, colors) {
                    common.assert(err, colors);
                    common.xmlFile.assert(colors, done);
                }
            });
        });
    });
});