
var orms = require("../config/orm");


var Wing = function (name,devoured) {
    this.name = name;
    this.devoured = devoured;
};


// orms.insertOne("wings","wings_name","Spicy", 0);

//object deconstruction - essentailly map your data to the object and pass that as the argument.

Wing.create = function(colName1, colVal1, colName2, colVal2,cb) {
    orms.insertOne({ tableName: "wings", colName1: colName1, colName2: colName2, colVal1: colVal1, colVal2: colVal2}, (err,data) => {
        cb(err,data);
    });
};

Wing.selectAll = function (cb) {
    orms.selectAll("wings", (err,data) => {
        cb(err,data);
    });
}

Wing.update = function(devoured,value,wingid,number,cb) {
    orms.updateOne({tableName:"wings", updatedCol:devoured, updatedValue:value, refCol:wingid, refVal:number}, function(err,data) {
        cb(err,data)
    });
};

// update: function(objColVals, condition, cb) {
//     orm.update("cats", objColVals, condition, function(data) {
//       cb(data);
//     });
// orms.selectAll("wings");

module.exports = Wing;

