import React, { Component } from 'react';

class Character extends Component {
  constructor() {
    super();

    this.state = {
      showDetails: false
    }
  }

  _handleClick(event) {
    event.preventDefault();
    this.setState({
      showDetails: !this.state.showDetails
    });
  }

  _handleDelete(event) {
    event.preventDefault();
    if (confirm('Delete Character?')) {
      this.props.onDelete(this.props.id);
    }
  }

  render() {
    let description;
    let labelButton = 'Show Details';

    if (this.state.showDetails) {
      description = <p>{this.props.description}</p>
      labelButton = "Hide Details";
    }

    return (<div>
      <div className="col-xs col-sm-2 col-md-2">
        <div className="card z-depth-5 clearfix">
          <div className="card-image">
            <img src={this.props.thumbnail} alt={this.props.name} />
          </div>
          <div className="card-content">
            <span className="card-title">{this.props.name}</span>
            {description}
          </div>
          <div className="card-action">
            <a className="left" href="#"
              onClick={this._handleClick.bind(this)}>{labelButton}</a>
            <a className="right" href="#"
              onClick={this._handleDelete.bind(this)}>Delete</a>
            <br />
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Character;