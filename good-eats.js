const queryURL =
	"https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";
const apiKey =
	"Bearer U0Nmmt4P2PTxxlIrT9xj7KpwXpaMdWiQdj720lxLyOesxIzO3tgPsWmDluZq_HR3wepg_oeAtrPlYdvfSjI_L1gBewdQqCVhQ-wLQrxCTZHdafAq8lr4PRFnv1-DX3Yx";

const requestObj = {
	url: queryURL,
	data: {
		term: "restaurant",
		// attributes: "hot_and_new",
		location: "Richmond, VA",
		limit: "50",
	},
	headers: { Authorization: apiKey },
};

$(".food-finder").on("click", function () {
	$.ajax(requestObj).done(function (response) {
		console.log("typeof response = " + typeof response);
		console.log(response);
	});
});
