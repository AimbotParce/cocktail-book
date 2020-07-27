import React, { Component } from 'react';

class Cocktail extends Component {

    state = {
        name: "Cocktail name",
        ingredients: "ingredient 1, ingredient 2",
        img_url: "./../images/image.png"
    }

    render() {
        return (
            <div className="cocktail-card">
                <img url={this.state.img_url} alt="Girl in a jacket" width="256" height="256" />
                <h1>{ this.state.name }</h1>
                <p>{ this.state.ingredients }</p>
            </div>
        );
    }
}

export default Cocktail;