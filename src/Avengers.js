import React, { Component } from 'react';

import Character from './Character';
import CharacterForm from './CharacterForm';
import jQuery from 'jquery';

class Avengers extends Component {
    constructor() {
        super();

        this.state = {
            characters: []
        }
    }

    render() {
        const characters = this._getCharacters();
        const charactersTotal = this._getTitle(characters.length);
        return (<div>  <div className="section no-pad-bot" id="index-banner">
            <div className="container">
                <h1 className="header center orange-text">Characters</h1>
                <h3>{charactersTotal}</h3>
                <div className="row">
                    {characters}
                </div>
                <CharacterForm addCharacter={this._addCharacter.bind(this)} />
            </div>
        </div>
        </div>
        )
    }

    componentWillMount() {
        this._searchCharacters();
    }

    componentDidMount() {
        this._timer =
            setInterval(() => this._searchCharacters(), 5000);
    }
    componentWillUnmount() {
        clearInterval(this._timer);
    }

    _searchCharacters() {
        jQuery.ajax({
            method: 'GET',
            url: 'http://localhost:3001/characters',
            success: (characters) => {
                this.setState({ characters })
            }
        });
    }

    _getCharacters() {
        return this.state.characters.map(character => <Character name={character.name} description={character.description}
            thumbnail={character.thumbnail} key={character.id}
            id={character.id} onDelete={this._deleteCharacter.bind(this)}
        />);
    }

    _getTitle(charactersTotal) {
        if (charactersTotal === 0) {
            return "No characters";
        } else if (charactersTotal === 1) {
            return "1 character";
        } else {
            return `${charactersTotal} characters`;
        }
    }

    _addCharacter(name, description, thumbnail) {
        const character = {
            name,
            description,
            thumbnail
        };

        jQuery.ajax({
            method: 'POST',
            url: 'http://localhost:3001/characters',
            data: character,
            success: newCharacter => {
                this.setState({ characters: this.state.characters.concat([newCharacter]) })
            }
        });
    }

    _deleteCharacter(characterId) {
        jQuery.ajax({
            method: 'DELETE',
            url: `http://localhost:3001/characters/${characterId}`
        });

        const characters = [...this.state.characters];
        characters.splice(characterId, 1);

        this.setState({ characters });
    }
}
export default Avengers;