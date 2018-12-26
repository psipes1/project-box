var express = require("express");
var router  = express.Router();
var Project = require("../models/project");
var middleware = require("../middleware");
var request = require("request");

//INDEX - show all projects
router.get("/", function(req, res){
    // Get all projects from DB
    Project.find({}, function(err, allProjects){
       if(err){
           console.log(err);
       } else {
           request('https://maps.googleapis.com/maps/api/geocode/json?address=sardine%20lake%20ca&key=AIzaSyBtHyZ049G_pjzIXDKsJJB5zMohfN67llM', function (error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body); // Show the HTML for the Modulus homepage.
                res.render("projects/index",{projects:allProjects});

            }
});
       }
    });
});

//CREATE - add new project to DB
router.post("/", middleware.isLoggedIn, function(req, res){
    // get data from form and add to projects array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var author = {
        id: req.user._id,
        username: req.user.username
    }
    var newProject = {name: name, image: image, description: desc, author:author}
    // Create a new project and save to DB
    Project.create(newProject, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            //redirect back to projects page
            console.log(newlyCreated);
            res.redirect("/projects");
        }
    });
});

//NEW - show form to create new project
router.get("/new", middleware.isLoggedIn, function(req, res){
   res.render("projects/new"); 
});

// SHOW - shows more info about one project
router.get("/:id", function(req, res){
    //find the project with provided ID
    Project.findById(req.params.id).populate("comments").exec(function(err, foundProject){
        if(err){
            console.log(err);
        } else {
            console.log(foundProject)
            //render show template with that project
            res.render("projects/show", {project: foundProject});
        }
    });
});

router.get("/:id/edit", middleware.checkUserProject, function(req, res){
    console.log("IN EDIT!");
    //find the project with provided ID
    Project.findById(req.params.id, function(err, foundProject){
        if(err){
            console.log(err);
        } else {
            //render show template with that project
            res.render("projects/edit", {project: foundProject});
        }
    });
});

router.put("/:id", function(req, res){
    var newData = {name: req.body.name, image: req.body.image, description: req.body.desc};
    Project.findByIdAndUpdate(req.params.id, {$set: newData}, function(err, project){
        if(err){
            req.flash("error", err.message);
            res.redirect("back");
        } else {
            req.flash("success","Successfully Updated!");
            res.redirect("/projects/" + project._id);
        }
    });
});


//middleware
// function isLoggedIn(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     }
//     req.flash("error", "You must be signed in to do that!");
//     res.redirect("/login");
// }

module.exports = router;

