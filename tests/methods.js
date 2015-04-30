var should = require('chai').should(),
    extractColors = require('../lib/extractColors');

describe('node-markup-color-extractor', function() {
    it('should have the expected methods', function() {
        extractColors.should.be.an('object');
        extractColors.from.should.be.an('object');
        extractColors._validateOptions.should.be.a('function');
        extractColors.from.buffer.should.be.a('function');
        extractColors.from.string.should.be.a('function');
        extractColors.from.file.should.be.a('function');
        extractColors.from.url.should.be.a('function');
    });
});