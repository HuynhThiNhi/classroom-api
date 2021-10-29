const service = {}
const Class = require('../../models/class')

service.findAll = () =>{
    return new Promise((resolve, reject) =>{
        resolve(Class.findAll());
    });
};


service.createClass = (data) => {
    return new Promise((resolve, reject) =>{
    
        Class.create(data).then((result) => {
            resolve(result);
            console.log(result);
        }).catch((err) => {
            console.log("error create class");
        });
    });

}
module.exports = service;