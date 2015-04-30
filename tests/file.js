var common = require('./common'),
    extractColors = require('../lib/extractColors');

describe('node-markup-color-extractor (extractColors.from.file)', function() {
    it('should extract colors from a file', function(done) {
        extractColors.from.file({
            file: common.xmlFile.path,
            attributes: true,
            text: true,
            cb: function(err, colors) {
                common.assert(err, colors);
                common.xmlFile.assert(colors, done);
            }
        });
    });
});