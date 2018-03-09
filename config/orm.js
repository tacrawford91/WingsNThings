var connection = require("./connection.js");



var orm = {
    selectAll: function(tableName) {
        var queryString = `SELECT * FROM ${tableName}`;
        connection.query(queryString,(err,result) => {
            if (err) {
                console.log(err);
            };
            console.log(result);
            return result
        });
    },
    insertOne: function({tableName, colName1, colVal1, colName2, colVal2}) {
        var queryString = `INSERT INTO ${tableName} SET ?`
        console.log(`colmn name 1 : ${colName1}`);
        connection.query(queryString,{
            [colName1]: colVal1,
            [colName2]: colVal2
        }, (err,result) =>{
        if (err) throw err;
        console.log("dataAdded")
        return
        });
    },
    updateOne: function({tableName, updatedCol,updatedValue, refCol, refVal}) {
        var queryString = `UPDATE ${tableName} SET ${updatedCol} = ${updatedValue} WHERE ${refCol} = ${refVal}`;
        connection.query(queryString, (err,result) =>{
            if (err) throw err;
            console.log("item updated")
            return
            })
        }
}



module.exports = orm;  