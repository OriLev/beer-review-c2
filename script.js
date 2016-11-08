$(document).ready(function(){



var addBeer = function (Name, Category, Rating) {
	var beer = {
		name: Name,
		category: Category,
		rating: Rating
	}

	beers.push(beer);
}

var updateBeers = function() {
	$('.beers-list').empty();
	for(var i=0; i<beers.length; i++) {
		$('.beers-list').append('<li>' + beers[i].name + " - " + beers[i].category + " rating: " + beers[i].rating + '</li>');
	}
}

var beers=[];
var sorted=0;

$('.post-beer').click(
	function()
{
var beer_name=$('.beer-input').val();
var beer_category=$('.category-input').val();
var beer_rating=$('.rating').val();
addBeer(beer_name , beer_category, beer_rating);
sorted = 0;
updateBeers();
}	
	);

$('.sort-beer').click(
	function()
{
if (sorted === 0) {
	sorted+=1;
}
beers.sort(function(a,b) {return sorted*(a.rating-b.rating)});
sorted*=(-1);
updateBeers();
}	
	);


});




