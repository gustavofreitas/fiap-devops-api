const sql = require('mssql')

const config = {
  user: 'gfreitas',
  password: '151200Gu',
  server: 'devop-db.database.windows.net',
  database: 'PasteBinDB',

  options: {
      encrypt: true
  }
}

function PasteBinRepository() {
}

async function lookup(id) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .input('input_parameter', sql.Int, id)
        .query('select * from paste where id = @input_parameter')

    return result1.recordset[0];
  } finally {
    sql.close();
  }
}

async function getAll() {
 try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .query('select * from paste')

    return result1.recordset;
 } finally {
   sql.close();
 }
}

async function remove(id) {
  try {
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .input('input_parameter', sql.Int, id)
        .query('delete from paste where id = @input_parameter')

    return true;
  } finally {
    sql.close();
  }
}

async function insert(paste) {
  try{
    let pool = await sql.connect(config)
    let result1 = await pool.request()
        .input('content', sql.VarChar, paste.content)
        .input('timeStamp', sql.BigInt, paste.timeStamp)
        .input('title', sql.VarChar, paste.title)
        .query('insert into paste values (@content, @timeStamp, @title)')

    return true;
  } finally {
    sql.close();
  }
}

PasteBinRepository.prototype = {
    lookup: lookup,
    getAll: getAll,
    delete: remove,
    insert: insert
};

var pasteBinRepository = new PasteBinRepository();

module.exports = pasteBinRepository;
