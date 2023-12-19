import MovieService from '../Service/service.js';
import express from 'express';

const app = express()
const port = 80

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/movies', async (req, res) => {

  // Initiate Object from Factory Class MovieService
  const moviesService = new MovieService();

  try {
    let movies = await moviesService.getMovies()
    if (movies instanceof Error) {
      throw movies; // Jump to the catch block
    }
    res.send(movies)
  } catch (error) {
    res.status(401).send(`${res.statusCode} ${error.message}`)
  }
  
})

app.get('/:id', async (req, res) => {

  var id = req.params.id;
  var test = req.params.test
  const moviesService = new MovieService();
  

  try {
    let movie = await moviesService.getMovie(id)
    if (movie instanceof Error) {
      throw movie; // Jump to the catch block
    }
    res.send(movie)
  } catch (error) {
    res.status(404).send(error.message)
    
  }

})

