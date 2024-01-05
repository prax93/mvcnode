export default class playlist {

    playList = []

    playListitem = {
        movieTitle: '',
        moviePoster: ''
    };


    addToPlaylist(movieTitle, moviePoster){


        this.playListitem.movieTitle = movieTitle
        this.playListitem.moviePoster = moviePoster

        this.playList.push(this.playListitem)

    }

    getPlayList(){
        return this.playList
    }


}