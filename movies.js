"use strict";

const glitchURL = 'https://aluminum-coral-comic.glitch.me/movies';

//FETCHING THE GLITCH DATA
const fetchGLITCH = async () => {
    try {
        //DEFINE THE RESPONSE TO GET THE DATA
        const res = await axios.get(glitchURL);
        console.log(res.data);
        return res.data;
    } catch(e) { //e is not event in this case... it is an ERROR event
        console.log("Fetch Glitch Error!", e);
    }
}


const movieContainer = document.querySelector('#movies');


//EMPTIES CONTAINER AND ASKS GLITCH FOR DATA TO PUT INTO THE CONTAINER AS A NEW ELEMENT USING FOR OF
const displayMovies = async () => {
    movieContainer.setHTML(''); //GRABS THE DOM #movies AND SETS TO AN EMPTY STRING

    let data = await fetchGLITCH(); //GRABS THE DATA
    // console.log(data);


    //movie = index of the data
    for(let movie of data) {

        //CREATE CARD FOR EACH MOVIE OBJECT
        let card = document.createElement('div');
        card.setAttribute("class", "card");
        card.setHTML( `<!-- Movie Card -->
<!--                    <div id="favCard" class="card" style="margin: 4rem;">-->
                        <div class="fav-card-content">
                        <h5 class="fav-title">${movie.title}</h5>
                            <div class="fav-body">
                                <img class="fav-poster" src="${movie.poster}" alt="Movie Title" style="width: 250px; height: 30vh;">
                                <p class="fav-director">Director: ${movie.director}</p>
                                <p class="fav-rated">Rated: ${movie.rated}</p>
                                <p class="fav-genre">Genre: ${movie.genre}</p>
                                 <p class="fav-rating">Rating: ${movie.rating}</p>
                            </div>
                            <div class="card-footer fav-footer">
                                <button type="button" id="edit">Edit</button>
                                <button type="button" id="delete">Delete</button>
                            </div>
                        </div>
                    `
    )
        movieContainer.append(card);

    }

}

displayMovies();
