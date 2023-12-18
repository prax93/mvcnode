let api_key = process.env.api_key;

export default async function getMovies(){

   try {
        let moviesList = await fetch('https://api.themoviedb.org/3/trending/all/week?api_key=' + api_key)

        if(moviesList.ok){
         moviesList = await moviesList.json()
         return  moviesList.results
        }
        else{
            throw Error('Internal Server Error')
        }

   } catch (error) {
        console.log(error.message)
   }

}