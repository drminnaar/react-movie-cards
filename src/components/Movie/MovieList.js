import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

const getRating = (movie, ratings) => {
    const rating = ratings.find(rating => rating.movieId === movie.id);

    if (rating) {
        return rating.rating;
    }

    return '';
};

const getMovies = (movies, ratings, moviesPerRow) => {
    return (
        <div className="card-deck">
            {
                movies.map(movie => (
                    <div key={movie.id} className={`movie-card col-sm-${12 / moviesPerRow}`}>
                        <MovieCard movie={movie} rating={getRating(movie, ratings)} />
                    </div>
                ))
            }
        </div>
    );
};

const MovieList = ({ movies, ratings, moviesPerRow }) => (
    <React.Fragment>
        {getMovies(movies, ratings, moviesPerRow)}
    </React.Fragment>
);

MovieList.defaultProps = {
    movies: [],
    ratings: [],
    moviesPerRow: 3,
};

MovieList.propTypes = {
    movies: PropTypes.array,
    ratings: PropTypes.array,
    moviesPerRow: PropTypes.number,
};

export default MovieList;