const service = {}
const Class = require('../../models/class')

service.findAll = () =>{
    return new Promise((resolve, reject) =>{
        
        Class.findAll().then((result) => {
            console.log("yessssssss");
            resolve(result);
        }).catch((err) => {
            console.log("error");
        });
       
    });
};


service.createClass = (data) => {
    return new Promise((resolve, reject) =>{
    
        Class.create(data).then((result) => {
           
            resolve(result);
            
        }).catch((err) => {
            console.log("error create class");
        });
    });

}
module.exports = service;