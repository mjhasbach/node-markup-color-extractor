var path = require('path'),
    should = require('chai').should();

module.exports = {
    attribute: ['value'],
    xmlFile: {
        path: path.join(__dirname, 'colors.xml'),
        assert: function(colors, done) {
            colors.should.have.length(3);
            done();
        }
    },
    assert: function(err, colors) {
        should.not.exist(err);
        colors.should.be.an('array');
    }
};