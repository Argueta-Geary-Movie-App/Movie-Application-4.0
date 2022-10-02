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

const displayMovies = async () => {
    movieContainer.setHTML(''); //GRABS THE DOM #movies AND SETS TO AN EMPTY STRING

    let data = await fetchGLITCH(); //GRABS THE DATA
    console.log(data);


    //movie = index of the data
    for(let movie of data) {

    }

}
