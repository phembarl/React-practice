import React from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    let buttonStyle = '';
    if (props.showPersons) {
        buttonStyle = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Diving Deeper Into The React Universe</h1>
            <button className={buttonStyle} onClick={props.click}>Toggle Persons</button>
        </div>
    );
}

export default Cockpit;