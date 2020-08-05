import knext from 'knex'
import path from 'path'


const db = knext({
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
})

export default db