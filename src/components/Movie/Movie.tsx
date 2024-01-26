import React, { useState } from 'react';
interface Props {
    addMovie: (movieName: string) => void;
}
const Movie: React.FC<Props> = ({ addMovie }) => {
    const [movieName, setMovieName] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (movieName !== '') {
            addMovie(movieName);
            setMovieName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input className='text-input'
                type="text"
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder="Введите название фильма"
            />
            <button className='add-btn' type="submit">Добавить</button>
        </form>
    );
};

export default Movie;
