import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
// import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Validation from './Validation/Validation';
import Char from './Char/Char';
import styled from 'styled-components';

const StyleButton = styled.button`

  background-color:${props => props.alt ? 'orange' : 'brown'};
  color:${props => props.alt ? 'black' : 'white'};
  font:inherti;
  border:1px solid blue;
  padding:8px;
  border-radius:5px;
  cursor:pointer;
  &:hover {

    background-color:${props => props.alt ? 'black' : 'pink'};
    color:${props => props.alt ? 'white' : 'black'};
  }


`;


class App extends Component {

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

    userInput: ''

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

  // changeInputHangler =(event) => {

  //   this.setState({

  //     users: [

  //       {username: event.target.value, alias:this.state.users[0].alias}

  //     ]
  //   })
  // }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
    
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

    const charList = this.state.userInput.split('').map((char, index) => {

      return <Char char={char} click={() =>this.deleteCharHandler(index)} key={index} />
    });

    const style = {

      backgroundColor: 'green',
      color:'white',
      font:'inherti',
      border:'1px solid blue',
      padding:'8px',
      borderRadius:'5px',
      cursor:'pointer',
      ':hover':{

        backgroundColor:'lightgreen',
        color:'black'
      }
    }

    let persons = null;

    if(this.state.showPersons){

      persons = (

        <div>

            {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler} >
              My Hobby is: Racing
            </Person>

            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.changedNameHandler} />

            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'Henry Torrez')}>
              My Hobbie is: Play with paw patrol
            </Person>

            <UserInput changeInput={this.changeInputHangler} name={this.state.users[0].username} />

            <button onClick={this.changeUser.bind(this, 'Ricardo', 'Perro')}>Change user</button>
            <UserOutput userName={this.state.users[0].username} userAlias ={this.state.users[0].alias} /> */}

            {this.state.persons.map((person, index) => {

              return <Person name={person.name} age = {person.age} click={() => this.deletePersonHandler(index)} key={person.id} changed={(event) =>this.changedNameHandler(event, person.id)} >This is a children of person!</Person>
            })}
        </div>
        
        )
      // style.backgroundColor ='red';
      // style[':hover'] ={

      //   backgroundColor:'salmon',
      //   color:'black'
      // }

      
    }

    let classes = [];

    if(this.state.persons.length <= 2){

      classes.push('red');
    }

    if(this.state.persons.length <=1){

      classes.push('bold');
    }

    return (

    // <StyleRoot >

      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}

        <p className={classes.join(' ')}>Hi, I am a react app!</p>
        <button className="button"
          //style = {style}
          // onClick= {this.switchNameHandler.bind(this, 'Henry Pineda')}>Switch name
          onClick = {this.togglePersonsHandler}
        >Show people
        </button>

        {/* <StyleButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>
          Show people
        </StyleButton> */}
          
        {/* {

          this.state.showPersons ===true ?
          <div>

            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler} >
              My Hobby is: Racing
            </Person>

            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed={this.changedNameHandler} />

            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} click={this.switchNameHandler.bind(this, 'Henry Torrez')}>
              My Hobbie is: Play with paw patrol
            </Person>

            <UserInput changeInput={this.changeInputHangler} name={this.state.users[0].username} />

            <button onClick={this.changeUser.bind(this, 'Ricardo', 'Perro')}>Change user</button>
            <UserOutput userName={this.state.users[0].username} userAlias ={this.state.users[0].alias} />
          </div>

          : null

        } */}

        {persons}

        <hr />

        <input type="text" onChange={(event) => this.outputlength(event)} value={this.state.userInput} />
        <p>{this.state.userInput}</p>

        <p>{this.state.userInput.length}</p>

        <Validation inputLength={this.state.userInput.length}  />

        {charList}
      </div>

    // </StyleRoot>

    )


  }
    

}

export default App;
