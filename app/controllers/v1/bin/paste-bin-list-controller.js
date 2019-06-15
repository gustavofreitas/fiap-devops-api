
function PasteBinListController() {
  this.pasteBinService_ = require('../../../services/paste-bin/paste-bin-service');
}

function get(req, res) {
  this.pasteBinService_.getAll().then(result => {
    res.status(200).json(result);
  });
  
}

PasteBinListController.prototype = {
  get: get
};

var pasteBinListController = new PasteBinListController();

module.exports = pasteBinListController;
