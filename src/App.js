import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state= {

    persons: [

      { name: 'Henry', age: 31},
      { name: 'Taty', age: 25},
      { name: 'Stephanie', age: 4}


    ],

    users: [

      {username:'Richard Dog', alias:'DogSquard'}
    ],

    showPersons: false

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

  changedNameHandler = (event) => {

      this.setState({

        persons: [

          {name: 'Max', age: 28},
          {name: event.target.value, age: 29},
          {name: 'Stephanie', age:26 }
        ]
      })

  }

  changeInputHangler =(event) => {

    this.setState({

      users: [

        {username: event.target.value, alias:this.state.users[0].alias}

      ]
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow})
    
  }

  deletePersonHandler= (personsIndex) => {
    const persons = this.state.persons;

    persons.splice(personsIndex,1);

    this.setState({ persons: persons});

  }


  render() {

    const style = {

      backgroundColor: 'white',
      font:'inherti',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
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

              return <Person name={person.name} age = {person.age} click={() => this.deletePersonHandler(index)} />
            })}
        </div>
        
        )
    }

    return (

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

        <h1>Hi, I am a react app!</h1>
        <button
          style = {style}
          // onClick= {this.switchNameHandler.bind(this, 'Henry Pineda')}>Switch name
          onClick = {this.togglePersonsHandler}
        >Show people
        </button>
          
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
      </div>

    )


  }
    

}

export default App;
