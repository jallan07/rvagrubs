// Variable for the Spinner
const spinner = $("#spinner");
// Variable for the Featured Eats Container
const featuredEats = $("#featured-eats");

// Richmond Geo Coordinates
const lat = "37.541290";
const lon = "-77.434769";

// Zomato API Key
const apiKey = "6b5779f943b05214f98f7f16a19770c5";

// Query Sorting
const sort = "rating";
const order = "desc";

// Query Request URL
const queryURL = `https://developers.zomato.com/api/v2.1/search?lat=${lat}&lon=${lon}&sort=${sort}&order=${order}&apikey=${apiKey}`;

// Fetch Zomato API Data on "Let's Eat" Button Click
$("#food-finder").on("click", function () {
	// Remove the hidden attribute for spinner
	spinner.removeAttr("hidden");
	// Make the Yelp API Call
	$.ajax({
		url: queryURL,
		method: "GET",
	}).then(function (response) {
		// Hide the spinner again
		spinner.attr("hidden", "");
		console.log(response);
		// Unhide the featured eats container
		featuredEats.removeAttr("hidden");
		createCards(response);
	});
});

// Create the card elements that will populate the site
function createCards(response) {
	for (let i = 0; i < response.restaurants.length; i++) {
		let place = response.restaurants[i].restaurant;
		// Get the name of each restaurant
		let placeName = place.name;
		console.log(placeName);
		let cuisines = place.cuisines;
		console.log(cuisines);
		let rating = place.user_rating.aggregate_rating;
		console.log(rating);
		let reviews = place.user_rating.votes;
		console.log(reviews);
	}
	console.log("this worked!");
}

// // Get the name of each restaurant
// response.restaurants.forEach((place) => console.log(place.restaurant.name));
