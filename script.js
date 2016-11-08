$(document).ready(function(){



var addBeer = function (Name, Category) {
	var beer = {
		name: Name,
		category: Category
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

$('.post-beer').click(
	function()
{
var beer_name=$('.beer-input').val();
var beer_category=$('.category-input').val();
addBeer(beer_name , beer_category);
updateBeers();
}	
	);

});
