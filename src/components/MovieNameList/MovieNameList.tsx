import React from 'react';

interface Props {
    index: number;
    movie: string;
    save: (index: number, newName: string) => void;
    onDelete: () => void;
}

const MovieNameList: React.FC<Props> = ({ index, movie, save, onDelete }) => {

    const editSave = (e: React.ChangeEvent<HTMLInputElement>) => {
        save(index, e.target.value);
    };

    return (
        <div>
            <span className='numbers-movie'>{index + 1}</span>
            <input
                className='input-movie'
            type="text"
            defaultValue={movie}
            onBlur={editSave}
            />
            <button className='btn-delete' onClick={onDelete}>Удалить</button>
        </div>
    );
};

export default MovieNameList;
