import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../Cockpit/Cockpit';

class App extends Component {
  state = {
    persons: [
      {id: 'andla', name: 'Femi', age: 26},
      {id: 'msoft', name: 'Clark', age: 31},
      {id: 'gogl', name: 'Kara', age: 35},
    ],
    visible: false,
  }

  togglePersons = () => {
    const doesShow = this.state.visible;
    this.setState({ visible: !doesShow});
  }

  changeNameHandler = (event, index) => {
    const persons = [...this.state.persons]
    const person = this.state.persons[index];
    person.name = event.target.value;
    this.setState({ persons, })
  }

  deletePersonsHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons, })
  }

  render() {
    let persons = null;

    if (this.state.visible) {
      persons = <Persons
      persons={this.state.persons}
      click={this.deletePersonsHandler}
      change={this.changeNameHandler}/>
    }
    return (
      <div className={classes.App}>
        <Cockpit
        persons={this.state.persons}
        click={this.togglePersons}/>
        { persons }
      </div>
    );
  }
}

export default App;
