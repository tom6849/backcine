const axios = require('axios');
require('dotenv').config();
const apiKey = 'a0cc3c3c6ac4b937f6a507aa61ca00d8';


const getMovieGenres = async () => {
    try {
        const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=fr-FR`);
        if (response.status === 200) {
            const genreNames = response.data.genres.map(genre => genre.name);
            console.log("🎬 Genres disponibles :", genreNames);
            return genreNames;
        } else {
            console.error("Erreur lors de la récupération des genres.");
            return [];
        }
    } catch (error) {
        console.error("Erreur d'appel API :", error);
        return [];
    }
};

getMovieGenres();


