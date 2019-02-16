
/*require("dotenv").config();

var keys = require("./keys.js");*/



//********* MOVIE
var axios = require("./node_modules/axios");

// Store all of the arguments in an array
var OptionArgs = process.argv[2];

if(OptionArgs ==="movie-this"){
  var nodeArgs = process.argv;
// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    movieName = movieName + "+" + nodeArgs[i];
  }
  else {
    movieName += nodeArgs[i];

  }
}

// Then run a request with axios to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";


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
);}


//**********Concert this  

if(OptionArgs ==="Concert-this"){

var axios = require("./node_modules/axios");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var artist = "";

// Loop through all the words in the node argument
// And do for-loop to handle the inclusion of "%20"s
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    artist= artist + "%20" + nodeArgs[i];
  }
  else {
    artist += nodeArgs[i];

  }
}

// Then run a request with axios to the bandsintown API with the artist specified
var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"


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


  });}

//********** */spotify*****************************
if(OptionArgs ==="spotify-this-song"){
  var nodeArgs = process.argv;
// Create an empty variable for holding the song name
var songName = "";

// Loop through all the words in the node argument
// And do a lfor-loop to handle the inclusion of "+"s
for (var i = 3; i < nodeArgs.length; i++) {

  if (i > 3 && i < nodeArgs.length) {
    songName = songName + " " + nodeArgs[i];
  }
  else {
    songName += nodeArgs[i];

  }
}

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: ,
  secret: 
});
 
spotify.search({ type: 'track', query: songName }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
  for(var i=0; i<data.tracks.items.length; i++){
  console.log(songName);
console.log(data.tracks.items[i].artists[i].name); 
console.log(data.tracks.items[i].name); 
console.log(data.tracks.items[i].external_urls.spotify)
console.log(data.tracks.items[i].album.name)
console.log("---------------------------------------------------")

  }
})
}