import type { NextApiRequest, NextApiResponse } from 'next'

// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: '203.157.229.35',
  user: 'root',
  password: 'adminhdc',
  database: 'nextjs_fullstack',
});

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
  // simple query
  connection.query(
    'SELECT * FROM attractions',
    function(err: any, results: any) {
      res.status(200).json(results)
      }
  );
    
}
