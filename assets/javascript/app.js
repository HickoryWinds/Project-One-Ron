// var settings = {
// 	"async": true,
// 	"crossDomain": true,
	// "url": "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=cher&api_key=695e3639575a58050cf53a441e62b0aa&format=json",
	// "method": "POST",
	// "headers": {
	// 	"x-rapidapi-host": "LastFmdimashirokovV1.p.rapidapi.com",
	// 	"x-rapidapi-key": "a481dff7e8msh34aa51c9ac8ed1bp1de621jsn99be1ccde2d9",
	// 	"content-type": "application/x-www-form-urlencoded"
	// },
	// "data": {
	// 	"apiKey": "695e3639575a58050cf53a441e62b0aa",
	// 	"secretKey": "99d8e7152206a3c5c5ffac99a910ec77",
	// 	"artist": "Joe Cocker"
	// }
// }

var apiKey_fm = "&api_key=695e3639575a58050cf53a441e62b0aa";
var searchType = "artist.getsimilar&";
var searchFormat = "&format=json";
var artist = "Freddie King";
var searchArtist = "artist=" + artist;
var method = "?method=" + searchType;
var url_fm = "http://ws.audioscrobbler.com/2.0/";
var output = [];


var settings_fm = {
	"async": true,
	"crossDomain": true,
	// "url": "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=Joe Cocker&api_key=695e3639575a58050cf53a441e62b0aa&format=json",
	"url": "https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=" + artist + "&api_key=695e3639575a58050cf53a441e62b0aa&format=json",
	// "url": url_fm + method + searchArtist + apiKey_fm + searchFormat
}
// console.log(url_fm + method + searchArtist + apiKey_fm + searchFormat);

$.ajax(settings_fm).done(function (response) {
	console.log(output);
	console.log("---1----");

	output = response;
	console.log(response);
	console.log("---2----");
	console.log(output);
	// console.log(JSON.stringify(response.similarartists.artist));
});

setTimeout(waitToPrint, 1000);

function waitToPrint() {
	console.log("---3----");
	console.log(output);
	$("#object-home").text("Artists similar to " + artist);
	for (var i = 0; i < 10; i++) {
		console.log(output.similarartists.artist[i].name);
		$("#object-home").append("<div>" + output.similarartists.artist[i].name + "</div>");
	}
	// $("#object-home").text(JSON.stringify(output));
}