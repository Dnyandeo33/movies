const searchMovies = (movies, value) => {
    if (value.length >= 3) {
        let matchingMovies = [];
        value = value.toLowerCase();
        movies.forEach(movie => {
            movie.title.toLowerCase().includes(value) ? matchingMovies.push(movie) : null;
        });
        return matchingMovies;
    }
    return movies
}

export default searchMovies;