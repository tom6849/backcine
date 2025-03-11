const axios = require('axios');
require('dotenv').config();

const apiKey = process.env.API_KEY;
const genres = [28, 12, 16, 35, 80, 99, 18, 10751, 14, 36, 27, 10402, 9648, 10749, 878, 53, 10752, 37]; // Exemple de genres (Action, Aventure, Animation, Comédie, etc.)

const fetchAllMoviesByGenres = async () => {
    const MovieTab = [];

    for (let genreId of genres) {
        let page = 1;
        let chargement = true;

        while (chargement && page <= 500) { // Limite de 500 pages par genre
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=fr-FR&page=${page}&with_genres=${genreId}`);
                
                if (response.status === 200 && response.data.results.length > 0) {
                    MovieTab.push(...response.data.results);
                    console.log(page)
                    page += 1;
                } else {
                    chargement = false;
                }
            } catch (error) {
                console.error("❌ Erreur lors de l'appel API TMDB :", error);
                chargement = false;
            }
        }
    }

    console.log(`Total de films récupérés : ${MovieTab.length}`);
};

fetchAllMoviesByGenres();
