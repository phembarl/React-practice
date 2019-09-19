import React from 'react';
import classes from './Person.css'

const person = (props) => {
    return (
        <div className={classes.Person}>
            <p onClick={props.click}>My name is {props.name}, I am {props.age} years old</p>
            <input type='text' onChange={props.change} value={props.name}/>
        </div>
    )
}

export default person;