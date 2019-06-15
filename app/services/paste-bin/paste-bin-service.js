
function PasteBinService() {
  this.pasteBinRepository_ = require("../../repositories/paste-bin/paste-bin-repository")
}

function lookup(id) {
  return this.pasteBinRepository_.lookup(id);
}

function create(note) {
  note.timeStamp = new Date().getTime();
  console.log(new Date().getTime());
  return this.pasteBinRepository_.insert(note);
}

function getAll() {
  return this.pasteBinRepository_.getAll();
}

function remove(id) {

}

var notes = [
  {
    id: 1,
    title: 'Paste 01',
    content: 'Loren Ipsun',
    timeStamp: '21:31:41'
  },
  {
    id: 2,
    title: 'Paste 02',
    content: 'Loren Ipsun\nLoren Ipsun',
    timeStamp: '22:32:42'
  },
  {
    id: 3,
    title: 'Paste 01',
    content: 'Loren Ipsun\nLoren Ipsun\nLoren Ipsun',
    timeStamp: '23:33:43'
  },
]

PasteBinService.prototype = {
  lookup: lookup,
  create: create,
  getAll: getAll,
  delete: remove
};

var pasteBinService = new PasteBinService();

module.exports = pasteBinService;
