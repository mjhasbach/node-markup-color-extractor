var should = require('chai').should(),
    common = require('./common'),
    extractColors = require('../lib/extractColors');

describe('node-markup-color-extractor (extractColors.from.url)', function() {
    it('should download an XML file and extract its colors', function(done) {
        extractColors.from.url({
            url: 'https://raw.githubusercontent.com/ByteProject/Tau-Ceti-theme/' +
            '26125e03d33419a91cecbcca49834e062279f00a/AppCode%20Scheme/Tau%20Ceti.icls',
            attributes: common.attribute,
            cb: function(err, colors) {
                common.assert(err, colors);
                colors.should.have.length(130);
                done();
            }
        });
    });
});