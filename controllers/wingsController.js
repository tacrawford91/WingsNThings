var express = require('express');
var router = express.Router();
var Wing = require("../models/wings");


router.get("/", (req,res) => {
    Wing.selectAll((err,data) => {
        if (err) throw err;
        console.log(data)
        var hbsObject = {
            wings: data
          };
        res.render("index", hbsObject);
    });
});

router.post("/api/add", (req,res)=> {
    Wing.create("wings_name",req.body.wingFlavor,"devoured",req.body.eaten, (err,data) => {
    if (err) throw err;
    console.log("data added");
    console.log(data);
    res.send("data added");
    });

});

router.put("/api/update", (req,res) => {
    Wing.update("devoured",req.body.eaten,"id", req.body.id, (err,data) => {
        if (err) throw err;
        console.log("updated");
        res.send("updated"+ data);
    })
})



// Export routes for server.js to use.
module.exports = router;


// need to add call back functions 

// Wing.create("wings_name","Zesty Lemon","devoured","0", (err,data) => {
//     if (err) throw err;
//     console.log("data added");
//     console.log(data);
// });




// Wing.update("devoured", 0,"id",1, (err,data) => {
//     if (err) throw err;
//     console.log(data);
// })

