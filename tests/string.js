var should = require('chai').should(),
    common = require('./common'),
    extractColors = require('../lib/extractColors');

describe('node-markup-color-extractor (extractColors.from.string)', function() {
    it('should extract a color from the inner text of an element', function(done) {
        extractColors.from.string({
            string: '<color>#0052A5</color>',
            text: true,
            cb: function(err, colors) {
                common.assert(err, colors);
                colors.should.have.length(1);
                done();
            }
        });
    });
    it('should extract a color from an element attribute', function(done) {
        extractColors.from.string({
            string: '<color color="#0052A5" value="#E0162B"></color>',
            attributes: common.attribute,
            cb: function(err, colors) {
                common.assert(err, colors);
                colors.should.have.length(1);
                done();
            }
        });
    });
    it('should extract a color from the inner text of an element and an element attribute', function(done) {
        extractColors.from.string({
            string: '<color value="#E0162B">#0052A5</color>',
            text: true,
            attributes: common.attribute,
            cb: function(err, colors) {
                common.assert(err, colors);
                colors.should.have.length(2);
                done();
            }
        });
    });
    it('should search all element attributes for colors if opt.attributes is true', function(done) {
        extractColors.from.string({
            string: '<color base="#0052A5" color="#0052A5" value="#E0162B"></color>',
            attributes: true,
            cb: function(err, colors) {
                common.assert(err, colors);
                colors.should.have.length(2);
                done();
            }
        });
    });
    it('should provide all colors instead of unique colors if opt.unique is false', function(done) {
        extractColors.from.string({
            string: '<color base="#0052A5" color="#0052A5" value="#E0162B"></color>',
            attributes: true,
            unique: false,
            cb: function(err, colors) {
                common.assert(err, colors);
                colors.should.have.length(3);
                done();
            }
        });
    });
});