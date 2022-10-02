"use strict";

const glitchURL = 'https://aluminum-coral-comic.glitch.me/movies';

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

