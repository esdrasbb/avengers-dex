import React, { Component } from 'react';

class CharacterForm extends Component {

    render() {
        const images = this._getImages();
        const options = this._getOptions(images);

        return (<div className="row">
            <form className="col s12" onSubmit={this._handleSubmit.bind(this)}>
                <h5>Add Character</h5>
                <div className="input-field col s12">
                    <input placeholder="Name" ref={input => this._name = input} /><br />
                    <select className="browser-default" ref={select => this._thumbnail = select} >
                        {options}
                    </select><br />
                    <textarea placeholder="Description" className="materialize-textarea"
                        ref={textarea => this._description = textarea}></textarea><br />
                    <button className="btn waves-effect waves-light" type="submit">Submit</button>
                </div>
            </form>
        </div>
        )
    }

    _handleSubmit(event) {
        event.preventDefault();
        let name = this._name.value;
        let description = this._description.value;
        let thumbnail = this._thumbnail.value;

        this.props.addCharacter(name, description, thumbnail);
        this._name.value = '';
        this._description.value = '';
        this._thumbnail.value = '';
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
            { "id": 17, "name": "Groot", "url": "images/groot.jpg" },
            { "id": 18, "name": "Suricate", "url": "images/suricate.jpg" }
        ];
    }

    _getOptions(images) {
        return images.map(image => {
            return <option value={image.url} key={image.id} >{image.name}</option>
        });
    }
}

export default CharacterForm;

