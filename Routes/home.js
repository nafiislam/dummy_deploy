
const express = require("express");
const router = express.Router();

const { Pool } = require("pg");

const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    ssl:true
});

router.get('/', async(req, res) => {
    const client = await pool.connect();
    const r = await client.query('SELECT * FROM hehe');
    //console.log(r.rows);
    client.release(true);
    res.render('home',{rows:r.rows}) 
})

module.exports = router;