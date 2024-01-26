import React, { useState } from 'react';
import MovieForm from './components/Movie/Movie';
import MovieNameList from './components/MovieNameList/MovieNameList';
import './App.css';

const App: React.FC = () => {
    const [movies, newsMovies] = useState<string[]>([]);

    const addMovie = (movieName: string) => {
        newsMovies([...movies, movieName]);
    };

    const deleteMovie = (index: number) => {
        const updated = [...movies];
        updated.splice(index, 1);
        newsMovies(updated);
    };

    const edit = (index: number, newName: string) => {
        if (newName !== '') {
            const updatedMovies = [...movies];
            updatedMovies[index] = newName;
            newsMovies(updatedMovies);
        }
    };

    return (
        <div>
            <h1 className='main-title'>Фильмы</h1>
            <MovieForm addMovie={addMovie} />
            <ul className='list-movie'>
                {movies.map((movie, index) => (
                    <MovieNameList
                        key={index}
                        index={index}
                        movie={movie}
                        onDelete={() => deleteMovie(index)}
                        save={edit}
                    />
                ))}
            </ul>
        </div>
    );
};

export default App;
