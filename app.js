var express      = require("express"),
    app          = express(),
    bodyParser   = require("body-parser"),
    mongoose     = require("mongoose"),
    Campground   = require("./models/campground");

mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Campground.create(
//   {
//     name: "Granite Hill", 
//     image: "https://farm4.staticflickr.com/3273/2602356334_20fbb23543.jpg",
//     description: "This is a huge granite hill, no bathrooms. No water. Beatiful granite!"
//   }, function(err, campground) {
//       if(err) {
//         console.log(err);
//       }
//       else {
//         console.log("NEWLY CREATED CAMPGROUND: ");
//         console.log(campground);
//       }
//   });

app.get("/", function(req, res) {
  res.render("landing");
});

// INDEX - show all campgrounds
app.get("/campgrounds", function(req, res) {
  Campground.find({}, function(err, allCampgrounds) {
    if(err) {
      console.log(err);
    }
    else {
       res.render("index", {campgrounds: allCampgrounds});
    }
  });
});

// CREATE - add new campground to DB
app.post('/campgrounds', function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description: desc};
    Campground.create(newCampground, function(err, newlyCreated){
      if(err) {
        console.log(err);
      }
      else {
        res.redirect("/campgrounds");
      }
    });
});

// NEW - show form to create new campground
app.get('/campgrounds/new',function(req,res) {
    res.render("new.ejs");
});

// SHOW - shows more info about one campground
app.get("/campgrounds/:id",function(req,res) {
    Campground.findById(req.params.id, function(err, foundCampground) {
      if(err) {
        console.log(err);
      }
      else {
        res.render("show", {campground: foundCampground});
      }
    });
});

app.listen(3000, function() {
  console.log("The YelpCamp Server has started!");
});