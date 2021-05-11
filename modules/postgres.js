const { Pool } = require('pg')
const config = require('../config')

const pg_config = {
    connectionString: config.CONNECTIONSTRING
}

class Database {
    constructor ( config ) {
        this.config = config
        this.#initDatabase()
    }

    async #initDatabase() {
        this.pool = new Pool(this.config)
    }

    async query (SQL_QUERY) {
        let client
        try {
            client = await this.pool.connect()
            return client.query(SQL_QUERY)
        } 
        catch (e) {
            throw new Error(e)
        } 
        finally {
            client?.release()
        }
    }
}

module.exports = new Database(pg_config)