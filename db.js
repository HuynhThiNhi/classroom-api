const sequelize = require('sequelize')


const db = new sequelize({
    database: "de34n1p5p0epc9",
    username: "hyicjddrryovro",
    password: "62d5e1cca76bfe4a123ff1ee32494f2eb4cbe54922c30d02b8de96b3b0fb2fff",

    host: "ec2-44-199-158-170.compute-1.amazonaws.com",
    port: 5432,
    dialect: "postgres",
    ssl: {rejectUnauthorized: false}
	
})

db.authenticate()
.then(() => console.log('Connect database successfully'))
.catch(err=> console.log(err))

module.exports = db