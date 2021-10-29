const db = require("../db");
const sequelize = require("sequelize");


const Class = db.define("ClassRoom", {
  className: sequelize.STRING,
  section: sequelize.STRING,
  subject: sequelize.STRING,
  room: sequelize.STRING,
  owner: sequelize.STRING
});

db.sync()
.then(()=>{
    console.log("Create class successfully...")
})

module.exports = Class