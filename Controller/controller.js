import MovieService from '../Service/service.js';
import express from 'express';


const app = express()
const port = 3000
const moviesService = new MovieService();

app.get('/movies', async (req, res) => {

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})