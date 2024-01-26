import React, { useState } from 'react';
import MovieForm from './components/Movie/Movie';
import MovieNameList from './components/MovieNameList/MovieNameList';
import JokeBtn from './components/JokeBtn/JokeBtn';
import './App.css';

const App: React.FC = () => {
    const [movies, setMovies] = useState<string[]>([]);

    const addMovie = (movieName: string) => {
        setMovies([...movies, movieName]);
    };

    const deleteMovie = (index: number) => {
        const updatedMovies = [...movies];
        updatedMovies.splice(index, 1);
        setMovies(updatedMovies);
    };

    const edit = (index: number, newName: string) => {
        if (newName !== '') {
            const updatedMovies = [...movies];
            updatedMovies[index] = newName;
            setMovies(updatedMovies);
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
            <hr />
            <JokeBtn />
        </div>
    );
};

export default App;
