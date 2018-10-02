var word = "@grbge fergr hello world vrv feg , fef".trim();

function replaceWord(text){
	return text.replace(/[^a-z0-9-]/g, ' ');
}

function ucfirst(text) {
	return text.charAt(0).toUpperCase() + text.substring(1);
}

function capitalize(text, separate) {
	var texte = replaceWord(text);

	return text.toLowerCase().split(' ').map(function(word) {
        return word[0].toUpperCase() + word.substr(1);
    }).join(separate);
 }

 function camelCase(text, separate) {
 	var texte = replaceWord(text);
	return capitalize(text, separate);
 }

 function snake_case(text, separate) {
 	var texte = replaceWord(text);
	return text.toLowerCase().split(' ').join("_");
 }

