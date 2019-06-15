
describe('PasteBinListController Tests', function() {

  var pasteBinListController;
  var req;
  var res;
  var next;

  beforeEach(function() {
    req = {};
    res = { status: function(code) { return { json: function(obj) {} }} };

    sinon.spy(res, "status");

    pasteBinListController = require('../../../../../../app/controllers/v1//bin/paste-bin-list-controller');
  });

  describe('get()', function() {

    it('should be a function', function(done) {
      expect(pasteBinListController.get).to.be.a('function');
      done();
    });

    it('should call res.status() one time', function(done) {
      pasteBinListController.get(req, res, next);

      expect(res.status.callCount).to.equal(1);
      done();
    });

    it('should call res.status() with 200', function(done) {
        pasteBinListController.get(req, res, next);

      expect(res.status.calledWith(200)).to.equal(true);
      done();
    });

  });
});
