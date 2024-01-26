import React, { useState, useEffect } from 'react';

const JokeBtn: React.FC = () => {
    const [joke, setJoke] = useState<string>('');

    const Jokes = async () => {
        try {
            const response = await fetch('https://api.chucknorris.io/jokes/random');
            if (response.ok) {
                const data = await response.json();
                setJoke(data.value);
            } else {
                throw new Error('Ошибка.. попробуйте позже');
            }
        } catch (error) {
            console.error('Error', error);
        }
    };

    useEffect(() => {
        Jokes();
    }, []);

    const handleClick = () => {
        Jokes();
    };

    return (
        <div>
            <h2>Чак Норрис</h2>
            <p>{joke}</p>
            <button onClick={handleClick}>Сгенерировать шутку</button>
        </div>
    );
};

export default JokeBtn;
