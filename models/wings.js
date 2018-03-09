
var orms = require("../config/orm");


var Wing = function (name,devoured) {
    this.name = name;
    this.devoured = devoured;
};


// orms.insertOne("wings","wings_name","Spicy", 0);

//object deconstruction - essentailly map your data to the object and pass that as the argument.
// orms.insertOne({ tableName: "wings", colName1: "wings_name", colName2: "devoured", colVal1: "Smelly", colVal2:0})

Wing.selectAll = orms.selectAll("wings");

Wing.update = function(devoured,Value,wingid,number) {
    orms.updateOne({tableName:"wings", updatedCol:devoured, updatedValue:Value, refCol:wingid, refVal:number});
};

// orms.selectAll("wings");

module.exports = Wing;

