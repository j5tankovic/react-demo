import React from 'react';
import {
    Route,
    Link,
} from 'react-router-dom';
import Home from './homePage';
import CharactersPage from './charactersPage';

const Routes = () => {
    return (
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/characters">Characters</Link></li>
            </ul>
            <Route exact path="/" component={Home} />
            <Route path="/characters" component={CharactersPage} />
        </div>
    )
}

export default Routes;