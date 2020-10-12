// Variable for the Spinner
const spinner = $("#spinner");
// Variable for the Featured Eats Container
const featuredEats = $("#featured-eats");

// Yelp API Variables
const queryURL =
	"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey =
	"Bearer U0Nmmt4P2PTxxlIrT9xj7KpwXpaMdWiQdj720lxLyOesxIzO3tgPsWmDluZq_HR3wepg_oeAtrPlYdvfSjI_L1gBewdQqCVhQ-wLQrxCTZHdafAq8lr4PRFnv1-DX3Yx";
const requestObj = {
	url: queryURL,
	data: {
		term: "restaurant",
		attributes: "hot_and_new",
		location: "Richmond, VA",
		limit: "20",
	},
	headers: { Authorization: apiKey },
};

// Fetch Yelp API Data on "Let's Eat" Button Click
$("#food-finder").on("click", function () {
	// Remove the hidden attribute for spinner
	spinner.removeAttr("hidden");
	// Make the Yelp API Call
	$.ajax(requestObj).done(function (response) {
		// Hide the spinner again
		spinner.attr("hidden", "");
		// Console Log the API Response
		console.log("typeof response = " + typeof response);
		console.log(response);
		// Unhide the featured eats container
		featuredEats.removeAttr("hidden");
	});
});
