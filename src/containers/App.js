import React, {Component} from 'react';
//import logo from './logo.svg';
import classes from './App.module.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Validation from '../components/Validation/Validation';
import Char from '../components/Char/Char';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';


class App extends Component {

  constructor(props){

    super(props);
    console.log('[App.js ] constructor');


  }


  state= {

    persons: [

      {id:'asdf1', name: 'Henry', age: 31},
      {id:'asdf2', name: 'Taty', age: 25},
      {id:'asdf3', name: 'Stephanie', age: 4}


    ],

    users: [

      {username:'Richard Dog', alias:'DogSquard'}
    ],

    showPersons: false,

    userInput: '',

    showCockpit: false

  }


  static getDerivedStateFromProps(props, state){

    console.log('[App.js] getDerivedStateFromProps', props);
    return state;

  }

  componentDidMount(){

    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState){

    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate(){

    console.log('[App.js] componentDidUpdate');
  }

  changeUser =(newName, newAlias) => {

    this.setState({

      users: [

        {username:newName, alias:newAlias}


      ]
    })

  }

  switchNameHandler = (newName)=> {

    //console.log('It was clicked!');
    //DONT DO THIS. THIS WONT WORK. this.state.persons[0].name = 'Henry Andres';
    this.setState({
      persons: [

        { name: newName, age: 31},
        { name: 'Taty Tercero', age: 25},
        { name: 'Stephanie Andrea', age: 5}
        
      ]

    })
  }

  changedNameHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {

      return p.id ===id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons =[...this.state.persons];

    persons[personIndex] = person

      this.setState({

        persons: persons
      });

  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
    
  }

  removeCockpitHandler =() => {

    const doesRemove = this.state.showCockpit;

    this.setState({showCockpit: !doesRemove});

  }

  deletePersonHandler= (personsIndex) => {
    //const persons = this.state.persons;


    const persons = [...this.state.persons];
    persons.splice(personsIndex,1);

    this.setState({ persons: persons});

  }

  outputlength = (event) => {

    this.setState({

      userInput: event.target.value


    });

  }

  deleteCharHandler = (index) => {

    const text = this.state.userInput.split('').map(char => {

      return char
    });

    text.splice(index,1);

    const newText = text.join('');

    this.setState({userInput: newText});
  }


  render() {

    console.log('[App.js] render');

    const charList = this.state.userInput.split('').map((char, index) => {

      return <Char char={char} click={() =>this.deleteCharHandler(index)} key={index} />
    });


    let persons = null;

    if(this.state.showPersons){

      persons = (

        <div>

            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.changedNameHandler}
            >

            </Persons>
        </div>
        
        )

    }

    return (

      <div className={classes.App}>

        <button onClick={ this.removeCockpitHandler}>
          
          { this.state.showCockpit ? 'Remove ' : 'Show '

          }
          Cockpit!
        
        
        </button>
        {this.state.showCockpit ?
        <Cockpit
          title={this.props.appTitle}
          personsLength={this.state.persons.length}
          clicked={this.togglePersonsHandler}
          showsPersons={this.state.showPersons}
        >
            
        </Cockpit>
        : null}

        {persons}

        <hr />

        <input type="text" onChange={(event) => this.outputlength(event)} value={this.state.userInput} />
        <p>{this.state.userInput}</p>

        <p>{this.state.userInput.length}</p>

        <Validation inputLength={this.state.userInput.length}  />

        {charList}

      </div>

    )


  }
    

}

export default App;
