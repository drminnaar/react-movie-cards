import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { SwitchLayout } from '../SwitchLayout/SwitchLayout';
import MovieList from './MovieList';
import { loadMovies } from '../../actions/movie';

const connector = connect(
    ({ movie }) => ({
        movies: movie.movies,
        ratings: movie.ratings,
    }),
    { 
        loadMovies,
    },
);

class Movies extends Component {

    constructor() {
        super();

        this.state = {
            moviesPerRow: 3,
        };
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        this.props.loadMovies();
    }

    onChange({ id }) {
        this.setState({
            moviesPerRow: parseInt(id),
        });
    }

    render() {
        const { movies, ratings } = this.props;

        return (
            <div className="container-fluid" style={{ marginLeft: '-15px' }}>
                <div className="d-flex flex-row justify-content-end">
                    <SwitchLayout onChangeHandler={this.onChange} />
                </div>
                <div className="d-flex flex-row justify-content-center">
                    <MovieList
                        movies={movies}
                        ratings={ratings}
                        moviesPerRow={this.state.moviesPerRow}
                    />
                </div>
            </div>
        );
    }
}

Movies.propTypes = {
    movies: PropTypes.array.isRequired,
    ratings: PropTypes.array.isRequired,
    loadMovies: PropTypes.func.isRequired,
};

export const ConnectedMovies = connector(Movies);
