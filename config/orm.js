var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function (err, data) {
            cb(err,data);
        })
    },
    insertOne: function({tableName, colName1, colVal1, colName2, colVal2}, cb) {
        var queryString = `INSERT INTO ${tableName} SET ?`
        console.log(`colmn name 1 : ${colName1}`);
        connection.query(queryString,{
            [colName1]: colVal1,
            [colName2]: colVal2
        }, (err,data) =>{
            cb(err,data);
            });
    },
    updateOne: function({tableName, updatedCol,updatedValue, refCol, refVal}, cb) {
        var queryString = `UPDATE ${tableName} SET ${updatedCol} = ${updatedValue} WHERE ${refCol} = ${refVal}`;
        connection.query(queryString, (err,data) =>{
                cb(err,data);
            })
        }
}



module.exports = orm;  