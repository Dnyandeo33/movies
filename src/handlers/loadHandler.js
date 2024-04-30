import createCard from '../components/createCard.js';
import data from '../data.js';
import dom from '../dom.js';

const loadHandler = () => {
    // load all movie
    data.movies.forEach(movie => {
        const card = createCard(movie);
        dom.cardContainer.append(card);
    });
};

export default loadHandler;
