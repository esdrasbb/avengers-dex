import React, { Component } from 'react';

class CharacterForm extends Component {

    render() {
        const images = this._getImages();
        const options = this._getOptions(images);

        return (<div className="row">
            <form onSubmit={this._handleSubmit.bind(this)}>
                <h4>Add Character</h4>
                <div className="input-field col s12">
                    <label htmlFor="fname">First Name</label><br />
                    <input type="text" placeholder="Name of your character..." id="fname" ref={input => this._name = input} /><br />
                    <label htmlFor="thumbnail">Thumbnail</label><br />
                    <select className="browser-default" id="thumbnail" ref={select => this._thumbnail = select} >
                        {options}
                    </select><br />
                    <label htmlFor="description">Description</label><br />
                    <textarea placeholder="Details about your character..." id="description" className="materialize-textarea"
                        ref={textarea => this._description = textarea}></textarea><br />
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
    }

    _handleSubmit(event) {
        event.preventDefault();

        if (!this._name.value){
            window.alert('What is the name?')
            return false;
        }

        let name = this._name.value;
        let description = this._description.value;
        let thumbnail = this._thumbnail.value;

        this.props.addCharacter(name, description, thumbnail);
        this._name.value = '';
        this._description.value = '';
        this._thumbnail.value = 'images/iron-man.jpg';
    }

    _getImages() {
        return [
            { "id": 1, "name": "Iron Man", "url": "images/iron-man.jpg" },
            { "id": 2, "name": "Hulk", "url": "images/hulk.jpg" },
            { "id": 3, "name": "Thor", "url": "images/thor.jpg" },
            { "id": 4, "name": "Captain America", "url": "images/captain-america.jpg" },
            { "id": 5, "name": "Black Widow", "url": "images/black-widow.jpg" },
            { "id": 6, "name": "Hawkeye", "url": "images/hawkeye.jpg" },
            { "id": 7, "name": "Doctor Strange", "url": "images/doctor-strange.jpg" },
            { "id": 8, "name": "Winter Soldier", "url": "images/winter-soldier.jpg" },
            { "id": 9, "name": "Falcon", "url": "images/falcon.jpg" },
            { "id": 10, "name": "Black Panther", "url": "images/black-panther.jpg" },
            { "id": 11, "name": "Vision", "url": "images/vision.jpg" },
            { "id": 12, "name": "Scarlet Witch", "url": "images/scarlet-witch.jpg" },
            { "id": 13, "name": "Spider-man", "url": "images/spider-man.jpg" },
            { "id": 14, "name": "Crossbones", "url": "images/crossbones.jpg" },
            { "id": 15, "name": "Gamora", "url": "images/gamora.jpg" },
            { "id": 16, "name": "Drax", "url": "images/drax.jpg" },
            { "id": 17, "name": "Groot", "url": "images/groot.jpg" }
        ];
    }

    _getOptions(images) {
        return images.map(image => {
            return <option value={image.url} key={image.id} >{image.name}</option>
        });
    }
}

export default CharacterForm;

