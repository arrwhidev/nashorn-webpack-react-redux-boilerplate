import React from 'react';
import Person from './Person'

export default ({ people, addPeople }) => {
    const simulateAddPeople = () => {
        const people = [
            { firstName: 'Harry', secondName: 'Smith', age: 25 },
            { firstName: 'Lucy', secondName: 'Turner', age: 18 },
            { firstName: 'Susan', secondName: 'Jones', age: 55 },
            { firstName: 'Tom', secondName: 'Smith', age: 90 }
        ];
        addPeople(people);
    };

    return (
        <div>
            <button onClick={simulateAddPeople}>Add some people</button>
            { people.map((person, i) => <Person person={person} key={i} />) }
        </div>
    );
};
