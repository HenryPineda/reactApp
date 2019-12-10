
//import React, { Component } from 'react';
import React, { PureComponent } from 'react';
import Person from './Person/Person';


class Persons extends PureComponent {

    static getDevivedStateFromProps(props, state){

        console.log('[Persons.js] getDerivedStateFromProps');
        console.log(props);
        return state;
    }

    // shouldComponentUpdate(nextProps, nestState){

    //     console.log('[Persons.js] shouldComponentUpdate');

    //     console.log(nextProps);

    //     console.log(this.props.persons);

    //     if(nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked);
    //     {
    //         return true;
    //     }else{

    //         return false;
    //     }
        
    // }

    getSnapshotBeforeUpdate(prevProps, prevState){

        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return { message: 'Snapshot with shomething!'};

    }

    componentDidUpdate(prevProps, prevState, snapshot){

        console.log('[Persons.js]  componentDidUpdate');
        console.log(snapshot);
    }


    componentWillUnmount() {

        console.log('[Persons.js] componentWillUnmount');
    }

    render() {

        console.log('[Perons.js] rending......');

        return this.props.persons.map((person, index) => {

            return (
                <Person 
                    key={person.id} 
                    name={person.name} 
                    age = {person.age} 
                    click={() => this.props.clicked(index)}  
                    changed={(event) =>this.props.changed(event, person.id)} 
                    isAuth={this.props.isAuthenticated}
                >
                    This is a children of person!
                </Person>
            );      
        });
    }

};

export default Persons;
