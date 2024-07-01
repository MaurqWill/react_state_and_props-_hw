import React, { useState } from 'react';
import styles from './MoviesList.module.css';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: "Boys in the Hood", description: "A powerful drama about life in the streets of South Central Los Angeles.", genre: "Drama" },
        { title: "Blue Hill Avenue", description: "Follows the lives of four friends from adolescence into adulthood as they navigate the dangerous streets of Boston.", genre: "Drama" },
        { title: "Set It Off", description: "Four women plan a bank robbery to escape from poverty and start new lives.", genre: "Action" },
        { title: "Training Day", description: "A rookie cop is partnered with a corrupt veteran detective in Los Angeles.", genre: "Action" },
        { title: "Menace II Society", description: "A gritty portrayal of life in the streets of Watts, Los Angeles.", genre: "Drama" },
        { title: "Juice", description: "Four friends in Harlem get caught up in a power struggle involving a local crime lord.", genre: "Drama" },
        { title: "Don't Be a Menace to South Central While Drinking Your Juice in the Hood", description: "A comedic parody of 'hood' movies, poking fun at various stereotypes.", genre: "Comedy" }
    ]);

    const [showDetails, setShowDetails] = useState(false);
    const [genre, setGenre] = useState(null);

    const removeMovie = (index) => {
        const updatedMovies = movies.filter((_, i) => i !== index);
        setMovies(updatedMovies);
    };

    const filteredMovies = genre ? movies.filter(movie => movie.genre === genre) : movies;

    return (
        <div className={styles.moviesListContainer}>
            <div className={styles.buttonContainer}>
                <button className={styles.toggleButton} onClick={() => setGenre(null)}>All Movies</button>
                <button className={styles.toggleButton} onClick={() => setGenre('Action')}>Action Movies</button>
                <button className={styles.toggleButton} onClick={() => setGenre('Drama')}>Drama Movies</button>
                <button className={styles.toggleButton} onClick={() => setGenre('Comedy')}>Comedy Movies</button>
            </div>
            <ul className={styles.moviesList}>
                {filteredMovies.map((movie, index) => (
                    <li key={index} className={styles.movieItem}>
                        <div>
                            <h3>{movie.title}</h3>
                            {showDetails && <p>{movie.description}</p>}
                            <button onClick={() => setShowDetails(!showDetails)}>
                                {showDetails ? "Hide Details" : "Show Details"}
                            </button>
                            <button onClick={() => removeMovie(index)}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
