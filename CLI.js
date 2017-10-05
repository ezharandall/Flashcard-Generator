var input1 = process.argv[2].toLowerCase();

var fs = to require the fs????

if (input1 === "basic") {

	var basic = require("./Basic");
	basic();


} else if (input1 ) {

	var cloze = require("./Cloze");
	cloze();

} else {

	console.log("The app doesn't do this!");
}