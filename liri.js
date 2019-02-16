
/*require("dotenv").config();

var keys = require("./keys.js");*/



//********* MOVIE*/
/*var axios = require("./node_modules/axios");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];

  }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
    console.log("Title: " + response.data.Title);
    console.log("Release Year: " + response.data.Year);
    console.log("IMDB Rating: " + response.data.imdbRating);
    console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
    console.log("Country: " + response.data.Country);
    console.log("Country: " + response.data.Language);
    console.log("Plot: " + response.data.Plot);
    console.log("Actors: " + response.data.Actors);

  }
);*/

//**********Concert this  */
var axios = require("./node_modules/axios");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var artist = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {
    artist= artist + "%20" + nodeArgs[i];
  }
  else {
    artist += nodeArgs[i];

  }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


// This line is just to help us debug against the actual URL.
console.log(queryUrl);

axios.get(queryUrl).then(
  function(response) {
  for(var i=0; i<response.data.length; i++){

      
       console.log(response.data[i].venue.name);
       console.log(response.data[i].venue.city);
       console.log(response.data[i].venue.region);
       console.log(response.data[i].venue.country);
       console.log(response.data[i].datetime);
       console.log("----------------------------");
    }


  });
//https://developer.spotify.com/documentation/web-api/reference/search/search/
//https://www.npmjs.com/package/node-spotify-api
//https://developer.spotify.com/dashboard/login
//https://www.npmjs.com/package/node-spotify-api