const router = require('express').Router()
const Users = require('../models/UserModel')
const Referals = require('../models/ReferalModel')

router.get('/', async (req, res) => {
    let users = await Users.getUsers()
    let referals = await Referals.getReferal()
    res.render('home', {
        users,
        referals,
        title: "Home Page"
    })
})

router.post('/', async (req, res) => {
    const { user_name, user_age, referal } = req.body
    await Users.createUser(user_name, user_age, referal)
    // console.log(user_name, user_age, referal)
    res.redirect('/')
})

router.post('/remove', async (req, res) => {
    const { user_id } = req.body
    await Users.deleteUsers(user_id)
    res.redirect('/')
})

router.post('/update', async (req, res) => {
    const { user_name, user_age, dname, dage } = req.body
    await Users.updateUsers(user_name, user_age, dname, dage)
    res.redirect('/')
})

module.exports = {
    path: '/',
    router
}