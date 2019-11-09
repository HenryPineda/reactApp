import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

const App = props => {

    const [personsState, setPersonsState] = useState(

        {
            persons: [
        
              { name: 'Henry', age: 31},
              { name: 'Taty', age: 25},
              { name: 'Stephanie', age: 4}
        
        
            ]

            // otherState: 'some other value'
        }
    );

    const [otherState, setOtherState] =useState('some other value');

    console.log(personsState, otherState);

     const switchNameHandler = ()=> {

        //console.log('It was clicked!');
        //DONT DO THIS. THIS WONT WORK. this.state.persons[0].name = 'Henry Andres';
        setPersonsState({
          persons: [
    
            { name: 'Henry Andres', age: 31},
            { name: 'Taty Tercero', age: 25},
            { name: 'Stephanie Andrea', age: 5}
            
          ],
          otherState: personsState.otherState
    
        })

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
          <button onClick= {switchNameHandler}>Switch name</button>
          <Person name={personsState.persons[0].name} age={personsState.persons[0].age} >My Hobby is: Racing</Person>
          <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
          <Person name={personsState.persons[2].name} age={personsState.persons[2].age} >My Hobbie is: Play with paw patrol</Person>
  
        </div>
  
    );

}


export default App;