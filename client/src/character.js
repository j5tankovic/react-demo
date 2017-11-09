import React from 'react';

const Character = ({ name, surname, house}) => {
    return (
        <li>
            <div>
                <p>{`${name} ${surname} from house ${house}`}. </p>
            </div>
        </li>
    )
}

export default Character;