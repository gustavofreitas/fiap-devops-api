
function PasteBinController() {
  this.pasteBinService_ = require('../../../services/paste-bin/paste-bin-service');
}

function get(req, res, next) {
  var id = req.params.pasteId;
  this.pasteBinService_.lookup(id).then(result => {
    res.status(200).json(result);
  });
  
}

function post(req,res, next){
  var newPaste = req.body;
  var list = this.pasteBinService_.create(newPaste).then( result => {
    if(result){
      this.pasteBinService_.getAll().then(list => {
        res.status(200).json(list)
      })
    }
    
  })
}

function remove(req, res, next) {
  res.status(200).json({method: 'delete'});
}

PasteBinController.prototype = {
  get: get,
  post: post,
  delete: remove
};

var pasteBinController = new PasteBinController();

module.exports = pasteBinController;
