
describe('PasteBinService Tests', function() {

  var pasteBinService;

  beforeEach(function() {
    pasteBinService = require('../../../../../app/services//paste-bin/paste-bin-service');
  });

  describe('lookupPasteBin', function() {

    it('should be a function', function(done) {
      expect(pasteBinService.lookupPasteBin).to.be.a('function');
      done();
    });

  });
});
