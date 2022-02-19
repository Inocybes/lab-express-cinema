const express = require('express');
const router = express.Router();

const Movie = require("../models/Movie.model")

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get("/movies", (req, res, next) =>{

  // Find Movies on db
  
  Movie.find()
  .then((response) =>{
    console.log(response);
    res.render("movies.hbs", {response})

  })
  .catch((err) =>{
  
  })
   
})

router.get("/movies/:id", (req, res, next) => {

  // Movie details
  Movie.findById(req.params.id)
  .then((response) => {
    console.log(response)
    res.render("movie-details.hbs", {response})
  })
      
  .catch((err) =>{
    console.log(err);
  })
  
})




module.exports = router;
