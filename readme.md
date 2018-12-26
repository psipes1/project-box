#ProjectCamp

##Initial Setup
* Add Landing Page
* Add Projects Page that lists all campgrounds

Each Project has:
   * Name
   * Image

##Layout and Basic Styling
* Create our header and footer partials
* Add in Bootstrap

##Creating New Projects
* Setup new Project POST route
* Add in body-parser
* Setup route to show form
* Add basic unstyled form

##Style the Projects page
* Add a better header/title
* Make Projects display in a grid

##Style the Navbar and Form
* Add a navbar to all templates
* Style the new Project form

##Add Mongoose
* Install and configure Mongoose
* Setup Project model
* Use Project model inside of our routes

##Show Page
* Review the RESTful routes we've seen so far
* Add description to our Project model
* Show db.collection.drop()
* Add a show route/template

##Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly!

##Add Seeds File
* Add a seeds.js file
* Run the seeds file every time the server starts

##Add the Comment model!
* Make our errors go away!
* Display comments on project show page

##Comment New/Create
* Discuss nested routes
* Add the comment new and create routes
* Add the new comment form

##Style Show Page
* Add sidebar to show page
* Display comments nicely

##Finish Styling Show Page
* Add public directory
* Add custom stylesheet

##Auth Pt. 1 - Add User Model
* Install all packages needed for auth
* Define User model 

##Auth Pt. 2 - Register
* Configure Passport
* Add register routes
* Add register template

##Auth Pt. 3 - Login
* Add login routes
* Add login template

##Auth Pt. 4 - Logout/Navbar
* Add logout route
* Prevent user from adding a comment if not signed in
* Add links to navbar

##Auth Pt. 5 - Show/Hide Links
* Show/hide auth links in navbar 

##Refactor The Routes
* Use Express router to reoragnize all routes

##Users + Comments
* Associate users and comments
* Save author's name to a comment automatically

##Users + Projects
* Prevent an unauthenticated user from creating a Project
* Save username+id to newly created project


TODOS
* Add "back" redirect to login
* Add method-override
* BOOTSTRAP NAV COLLPASE JS
* Flash Messages
* Refactor container div to header
* Show/hide delete and update buttons
* style login/register forms
* Random Background Landing Page
* Refactor middleware
* change styling in show template - comment delete/update
* UPATE/DELETE PROJECT

* BOOTSTRAP NAV COLLPASE JS
* Flash Messages
* Refactor container div to header
* Show/hide delete and update buttons
* style login/register forms
* Random Background Landing Page
* Refactor middleware
* change styling in show template - comment delete/update
* UPDATE/DELETE Project




RESTFUL ROUTES

name      url      verb    desc.
===============================================
INDEX   /dogs      GET   Display a list of all dogs
NEW     /dogs/new  GET   Displays form to make a new dog
CREATE  /dogs      POST  Add new dog to DB
SHOW    /dogs/:id  GET   Shows info about one dog

INDEX   /projects
NEW     /projects/new
CREATE  /projects
SHOW    /projects/:id

NEW     projects/:id/comments/new    GET
CREATE  projects/:id/comments      POST