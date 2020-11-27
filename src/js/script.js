document.addEventListener("DOmContentLoaded", function() {
    let connexion = new MovieDB();
    connexion.requeteDernierFilm();
});



class MovieDB{

    constructor(){
        console.log("new MovieDB()");
        this.apikey = "07b760785e764d0416142637ea46b6ca";
        this.lang = "fr-CA";
        this.baseUrl = "https://api.themoviedb.org/3/";
        this.imgPath = "https://image.tmdb.org/t/p/";
        this.totalFilm = 8;
    }

    requeteDernierFilm() {
        let requete = new XMLHttpRequest();
        requete.addEventListener("loadend",this.retourRequeteDerniersFilm.bind(this));
        requete.open("GET", this.baseUrl + 'movie/now_playing?api_key=' + this.apikey + '&language=' + this.lang + "&page=1");
    }


    retourRequeteDerniersFilm(evt){
        console.log("ca marche");
        let target = evt.currentTarget;
        let data = JSON.parse(target.responseText).results;
        console.log(data);

        this.afficheDernierFilm(data);
    }


    afficheDernierFilm(data) {
        for (let i = 0; i < data.length; i++) {
            console.log(data[i].title);
            console.log(data[i].overview);
        }
    }

}