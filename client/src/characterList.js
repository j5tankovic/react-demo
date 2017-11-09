import React from 'react';
import Character from './character';

const CharacterList = ({ characters }) => {
    return (
        <ul>
            {characters.map((character, index) => {
                return <Character 
                            name={character.name}
                            surname={character.surname}
                            house={character.house}
                            key={`${character.name}${index}`}
                        />
            })}
        </ul>
    )
}

export default CharacterList;