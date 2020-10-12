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
		// Run the createCards function found on "scripts/cards.js"
		createCards(response);
	});
});

// // Get the name of each restaurant
// response.restaurants.forEach((place) => console.log(place.restaurant.name));
