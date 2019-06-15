
describe('PasteBinRepository Tests', function() {

  var pasteBinRepository;

  beforeEach(function() {
    pasteBinRepository = require('../../../../../app/repositories//paste-bin/paste-bin-repository');
  });

  describe('getPasteBinData()', function() {

    it('should be a function', function(done) {
      expect(pasteBinRepository.getPasteBinData).to.be.a('function');
      done();
    });

  });
});
