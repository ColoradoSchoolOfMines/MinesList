var availableTags = [
	"Books",
	"Beef",
	"Clothes",
	"Furniture",
	"Video Games",
];
availableTags.sort();

// probably unnecessary, this JSON object
var autocompleteList = JSON.stringify(availableTags);

// Make autocompleteList accessible globally
this.getAutocompleteList = function(){
	if(availableTags) {
    	return availableTags;
    }
}