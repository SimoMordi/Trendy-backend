const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express();

const movies = [ 
    { id: 1, title: "Inception", director: "Christopher Nolan", year: 2010 },
 { id: 2, title: "Interstellar", director: "Christopher Nolan", year: 2014 }, 
 { id: 3, title: "Parasite", director: "Bong Joon-ho", year: 2019 }, 
 { id: 4, title: "The Matrix", director: "The Wachowskis", year: 1999 } 
];

app.get("/info", (req, res) => {
    const infoMessage = "To fetch all movies, use GET /movies. " + 
    "To add a new movie, use POST /movies. " + 
    "To update or delete a movie, use PUT or DELETE on /movies/id respectively.";

    res.send(infoMessage)
});

app.get("/movies/:id", (req, res) => {
  const movieId = movies.find(movie => movie.id == req.params.id)
  
  res.send(movieId)
})



app.listen(4000, () => {
    console.log ( ' http://localhost:4000 ');
})