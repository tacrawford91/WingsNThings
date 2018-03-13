var express = require('express');
var router = express.Router();
var Wing = require("../models/wings");


// Home request - Show all wings and where handlebars filters them based on devoured
router.get("/", (req,res) => {
    Wing.selectAll((err,data) => {
        if (err) throw err;
        var hbsObject = {
            wings: data
          };
        res.render("index", hbsObject);
    });
});

//Save new wing to data base 
router.post("/api/add", (req,res)=> {
    // create function from ORM to add to db
    Wing.create("wings_name",req.body.wingFlavor,"devoured", req.body.eaten, (err,data) => {
    if (err) throw err;
    res.send("data added");
    });

});

// Update devoured when eaten clicked utlizing put request and update ORM method
router.put("/api/update", (req,res) => {
    Wing.update("devoured",req.body.eaten,"id", req.body.id, (err,data) => {
        if (err) throw err;
        res.send("updated"+ data);
    });
});



// Export routes for server.js to use.
module.exports = router;


