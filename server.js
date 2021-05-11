const express = require('express')
const app = express()
const config = require('./config')
const glob = require('glob')
const path = require('path')

//settings
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')


glob('routes/*Route.js', (er, files) => {
    files.forEach(file => {
        let route = require(path.join(__dirname, file))
        if(route.path && route.router){
            app.use(route.path, route.router)
        }
    })
})

app.listen(config.PORT, () => console.log(`Server running at ${config.PORT}...`))
