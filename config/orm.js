var connection = require("./connection.js");

var orm = {
    //get all data
    selectAll: function(tableName, cb) {
        var queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString, function (err, data) {
            cb(err,data);
        })
    },
    // Create new wing - utilizing deconstruction for clean, fun code
    insertOne: function({tableName, colName1, colVal1, colName2, colVal2}, cb) {
        var queryString = `INSERT INTO ${tableName} SET ?`
        connection.query(queryString,{
            [colName1]: colVal1,
            [colName2]: colVal2
        }, (err,data) =>{
            cb(err,data);
        });
    },
    // Updaye wing - utilizing deconstruction for clean, fun code
    updateOne: function({tableName, updatedCol,updatedValue, refCol, refVal}, cb) {
        var queryString = `UPDATE ${tableName} SET ${updatedCol} = ${updatedValue} WHERE ${refCol} = ${refVal}`;
        connection.query(queryString, (err,data) => {
            cb(err,data);
        })
    }
}



module.exports = orm;  