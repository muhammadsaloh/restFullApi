const Database = require('../modules/postgres')


class UserModel {
    async createUser (user_name, user_age, referal_id) {
        let { rows } = await Database.query(`INSERT INTO users (user_name, user_age, referal_id) VALUES ('${user_name}', '${user_age}', ${referal_id})`)
        return rows
    }

    async getUsers() {
        let { rows } = await Database.query(`SELECT * FROM users INNER JOIN referal ON referal.referal_id = users.referal_id`)
        return rows
    }

    async deleteUsers(user_id) {
        let { rows } = await Database.query(`DELETE FROM users WHERE user_id = ${user_id}`)
        return rows
    }

    async updateUsers(user_name, user_age, dname, dage) {
        let { rows } = await Database.query(`UPDATE users SET user_name = '${user_name}', user_age = '${user_age}' WHERE user_name = '${dname}' AND user_age = '${dage}'`)
        return rows
    }
}

module.exports = new UserModel()