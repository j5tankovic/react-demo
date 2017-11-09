import React from 'react';
import Form from './form';
import Search from './search';
import CharacterList from './characterList';

class CharactersPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            searchTerm: '',
        }

        this.addCharacter = this.addCharacter.bind(this);
        this.filterCharacter = this.filterCharacter.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/characters', {mode: 'cors'})
            .then(response => {
                return response.json();
            }).then(data => {
                this.setState({
                    characters: data
                })
            }).catch(error => {
                console.log(error);
            });
    }

    addCharacter(character) {
        const _characters = this.state.characters;
        this.setState({
            characters: _characters.concat(character),

        })
    }

    handleSearch(value) {
        this.setState({
            searchTerm: value,
        });
    }

    filterCharacter(searchTerm) {
        return this.state.characters.filter(character => {
            return character.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
        });
    }

    render() {
        const filtered = this.filterCharacter(this.state.searchTerm);
        return (
            <div>
                <h1> GoT characters </h1>
                <Form onSubmit={this.addCharacter} />
                <Search onSearch={this.handleSearch} />
                <CharacterList characters={filtered} />
            </div>
        )
    }
}

export default CharactersPage;