var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Cloud's Rest", 
		image: "https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg",
		description: "Bacon ipsum dolor amet turkey turducken cupim chicken swine. Short loin ham short ribs, prosciutto salami tongue bacon andouille kielbasa. Pork prosciutto tongue bacon venison, spare ribs bresaola porchetta jowl shank. Cow biltong burgdoggen turducken, drumstick cupim short ribs ham hock doner shankle filet mignon. Shoulder brisket venison, short ribs ball tip picanha drumstick kielbasa cupim salami short loin frankfurter pork chop pork belly. Ham meatloaf picanha tri-tip tongue, andouille drumstick beef. Porchetta leberkas turkey pancetta tail fatback shoulder landjaeger pork belly chicken rump biltong ball tip swine andouille."
	},
	{
		name: "Desert Mesa", 
		image: "https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg",
		description: "Bacon ipsum dolor amet turkey turducken cupim chicken swine. Short loin ham short ribs, prosciutto salami tongue bacon andouille kielbasa. Pork prosciutto tongue bacon venison, spare ribs bresaola porchetta jowl shank. Cow biltong burgdoggen turducken, drumstick cupim short ribs ham hock doner shankle filet mignon. Shoulder brisket venison, short ribs ball tip picanha drumstick kielbasa cupim salami short loin frankfurter pork chop pork belly. Ham meatloaf picanha tri-tip tongue, andouille drumstick beef. Porchetta leberkas turkey pancetta tail fatback shoulder landjaeger pork belly chicken rump biltong ball tip swine andouille."
	},
	{
		name: "Canyon Floor", 
		image: "https://farm5.staticflickr.com/4153/4835814837_feef6f969b.jpg",
		description: "Bacon ipsum dolor amet turkey turducken cupim chicken swine. Short loin ham short ribs, prosciutto salami tongue bacon andouille kielbasa. Pork prosciutto tongue bacon venison, spare ribs bresaola porchetta jowl shank. Cow biltong burgdoggen turducken, drumstick cupim short ribs ham hock doner shankle filet mignon. Shoulder brisket venison, short ribs ball tip picanha drumstick kielbasa cupim salami short loin frankfurter pork chop pork belly. Ham meatloaf picanha tri-tip tongue, andouille drumstick beef. Porchetta leberkas turkey pancetta tail fatback shoulder landjaeger pork belly chicken rump biltong ball tip swine andouille."
	}
]

function seedDB() {
	// Remove all campgrounds
	Campground.remove({}, function(err) {
		if(err) {
			console.log(err)
		}
		else {
			console.log("removed campgrounds!")
			// Add a few campgrounds
			data.forEach( function(seed) {
				Campground.create(seed, function(err, campground) {
					if(err) {
						console.log(err)
					} else {
						console.log("added a campground")
						// Create a comment
						Comment.create(
							{
								text: "This place is great, but I wish there was internet.",
								author: "Homer"
							}, function(err, comment) {
								if(err) {
									console.log(err)
								} else {
									campground.comments.push(comment);
									campground.save();
									console.log("Created new comment")
								}
							});
							
					}
				});
			});
		}
	});




	// Add a few comments
}

module.exports = seedDB;