import createCard from '../components/createCard.js';
import data from '../data.js';
import dom from '../dom.js';
import searchMovies from '../utils/searchMovies.js';


const loadKeyupHandler = () => {
    // load all movie
    data.movies.forEach(movie => {
        const card = createCard(movie);
        dom.cardContainer.append(card);
    });

    // filter movie
    dom.input.addEventListener('keyup', () => {
        const value = dom.input.value.toLowerCase()
        const movies = data.movies
        const filterMovie = searchMovies(movies, value)

        dom.cardContainer.innerHTML = '';
        filterMovie.forEach((movie) => {
            const card = createCard(movie);
            dom.cardContainer.append(card)
        })

    })
};

export default loadKeyupHandler;
