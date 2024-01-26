import React from 'react';

interface Props {
    joke: string;
}

const Joke: React.FC<Props> = ({ joke }) => {
    return (
        <div>
            <p>{joke}</p>
        </div>
    );
};

export default Joke;
