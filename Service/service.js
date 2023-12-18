/**
Factory Class
**/
export default class MovieService{

api_key = process.env.api_key;

// Constructor
async getMovies(){
   try {

     let moviesList = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=' + this.api_key)

     if(moviesList.ok){
          moviesList = await moviesList.json()
          return  moviesList.results
     }
     else{
          throw Error(moviesList.statusText)
     }
   } catch (error) {
     return error
   }
}

// Getter and Setters
setApiKey(api_key){
     this.api_key = api_key
}

getApiKey(){
     return api_key
}

}