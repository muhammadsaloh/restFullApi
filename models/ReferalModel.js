const Database = require('../modules/postgres')

class ReferalModel {
    async createReferal (name) {
        let { rows } = await Database.query(`INSERT INTO referal(referal_name) VALUES ('${name}') RETURNING *`)
        return rows
    }

    async getReferal() {
        let { rows } = await Database.query(`SELECT * FROM referal`)
        return rows
    }

}

module.exports = new ReferalModel()