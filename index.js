import getMovies from './service.js'; 
import express from 'express';


const app = express()
const port = 3000

app.get('/movies', async (req, res) => {
    let movies = await getMovies()
  res.send(movies)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})