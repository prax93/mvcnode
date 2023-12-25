import MovieService from '../Service/service.js';
import playlist from '../Service/playlist.js'
import express from 'express';

const app = express()

// Used to parse Json from Body
app.use(express.json());

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

app.get('/movie/:id', async (req, res) => {

  var id = req.params.id;

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

app.post('/playlist', (req, res) => {

  const playListService = new playlist();
  var playList = []
  var movieTitle = req.body.movieTitle
  var moviePoster = req.body.moviePoster


  playListService.addToPlaylist(movieTitle, moviePoster)

  res.send(playListService.getPlayList())



})

