const ReferalModel = require('./models/ReferalModel')


async function main () {
    let response = await ReferalModel.createReferal("Sarafan")
    console.log(response)
}

// main()