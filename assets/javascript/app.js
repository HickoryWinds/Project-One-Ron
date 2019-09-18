var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://hickorywinds.github.io/Project-One-Ron/",
	"method": "POST",
	// "headers": {
	// 	"x-rapidapi-host": "LastFmdimashirokovV1.p.rapidapi.com",
	// 	"x-rapidapi-key": "a481dff7e8msh34aa51c9ac8ed1bp1de621jsn99be1ccde2d9",
	// 	"content-type": "application/x-www-form-urlencoded"
	// },
	// "data": {
		"apiKey": "695e3639575a58050cf53a441e62b0aa",
		"artist": "Joe Cocker"
	// }
}

$.ajax(settings).done(function (response) {
	console.log(response);
});