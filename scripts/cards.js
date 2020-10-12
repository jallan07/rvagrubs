// Create the card elements that will populate the site
function createCards(response) {
	for (let i = 0; i < response.restaurants.length; i++) {
		// Set the variable of place equal to each restaurant in the object
		let place = response.restaurants[i].restaurant;
		// Set variables for each important place element we need to grab
		let placeName = place.name;
		let rating = place.user_rating.aggregate_rating;
		let reviews = place.user_rating.votes;
		// Create a card using bootstrap and the newly defined variables shown above
		var card = `
		<div class="card border-primary my-4 mx-4" style="max-width: 20rem;">
		<div class="card-header">${rating} stars ${reviews} reviews</div>
			<div class="card-body">
				<h4 class="card-title">${placeName}</h4>
				<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			</div>
		</div>`;
		// Append the new card to the featured eats container
		$("#featured-eats").append(card);
	}
}
