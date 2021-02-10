////////////// LLAMAR A PG ADMIN ///////////

const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     user: 'postgres',
//     password: 'm4rj0ri3',
//     database: 'Recuperar_API',
//     port: '5432'
// });


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});
/////////////////////////////////////////////////////////
const getLocations = async(req, res) => {

    const response = await pool.query('select count(release_year)as numero_pelis, release_year from titulos_netflix group by release_year order by release_year desc;');
    res.status(200).json(response.rows);
}

const getTitles = (req, res) => {
    res.send('titles');
}

const getDirectors = (req, res) => {
    res.send('directors');
}

const getActors = (req, res) => {
    res.send('actors');
}

module.exports = {
    getLocations,
    getTitles,
    getDirectors,
    getActors
}