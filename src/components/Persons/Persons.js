import React from 'react';
import Person from './Person/Person';

const Persons = (props) => props.persons.map((person, index) => {
        return <Person
        name={person.name}
        age={person.age}
        key={person.id}
        change={(event) => props.change(event, index)}
        click={() => props.click(index)}/>
    })

    export default Persons;
