import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect (() => {
        setMovies(MovieService.getMovies(movies));
    )}
               
    return (
        <div className="container-fluid" style={{marginLeft: '-15px'}}>
            <div className="d-flex flex-row">                    
                <div className="col-sm-12">
                    <MovieList movies={movies} />
                </div>
            </div>
        </div>
    );
}

export default Movies;
