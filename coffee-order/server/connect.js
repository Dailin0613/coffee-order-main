import pkg from 'pg'

const {Pool} = pkg

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'coffee-order',
    password: 'root',
    port: 5432
})

pool.connect((err, client, release) => {
    if (err) {
        return console.error('Error client', err.stack)
    }
    client.query('SELECT NOW()', (err, result) => {
        release()
        if (err) {
            return console.error('Error executing query', err.stack)
        }
        console.log('Connected to database !!!');
    })
})

export default pool