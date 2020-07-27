import React from 'react';

import Cocktail from './Cocktail.js'

function Main(props) {

    const cocktails_names = ["Negroni", "Manhattan", "Dalonga Coffee", "Boulevardier"]
    const cocktail_list = cocktails_names.map(cocktail => <Cocktail />)

    return (
        <div className="cocktails-col">
            { cocktail_list }            
        </div>
    );
}

export default Main;