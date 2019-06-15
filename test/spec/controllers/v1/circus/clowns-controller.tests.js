
describe('ClownsController Tests', function() {

  var clownsController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    clownsController = require('../../../../../app/controllers/v1/circus/clowns-controller');
  });

  describe('delete()', function() {

    it('should be a function', function(done) {
      expect(clownsController.delete).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      clownsController.delete(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        clownsController.delete(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
