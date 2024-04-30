import createCard from '../components/createCard.js';
import data from '../data.js';
import dom from "../dom.js";
import searchMovies from '../utils/searchMovies.js';

const keyupHandler = () => {
    const value = dom.input.value.toLowerCase()
    const movies = data.movies
    const filterMovie = searchMovies(movies, value)


    dom.cardContainer.innerHTML = '';
    if (filterMovie.length === 0) {
        dom.cardContainer.innerHTML = `<h1>Movie Not found</h1>`
        return
    }
    filterMovie.forEach((movie) => {
        const card = createCard(movie);
        dom.cardContainer.append(card)
    })
}

export default keyupHandler;