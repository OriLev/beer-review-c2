$(document).ready(function(){

function BeerReviewApp () {

var addBeer = function (Name, Category, Rating) {
	var beer = {
		name: Name,
		category: Category,
		rating: Rating
	}

	beers.push(beer);
}

var renderBeers = function() {
	$('.beers-list').empty();
	for(var i=0; i<beers.length; i++) {
		$('.beers-list').append('<li>' + beers[i].name + " - " + beers[i].category + " rating: " + beers[i].rating + '</li>');
	}
}

function sortBeers(){
		if (sorted === 0) {
			sorted+=1;
		}
		beers.sort(function(a,b) {return sorted*(a.rating-b.rating)});
		sorted*=(-1);
		renderBeers();
	}

var sorted = 0;
var beers=[];

return {
addBeer: addBeer,
renderBeers: renderBeers,
sortBeers: sortBeers
}


}

var app = BeerReviewApp();




$('.post-beer').click(
	function()
{
var beer_name=$('.beer-input').val();
var beer_category=$('.category-input').val();
var beer_rating=$('.rating').val();
app.addBeer(beer_name , beer_category, beer_rating);
sorted = 0;
app.renderBeers();
}	
	);

$('.sort-beer').click(app.sortBeers);	



});




