import React from 'react';

export default ({ person }) => (
    <div>
        <p>{person.firstName} {person.secondName} is {person.age} years old.</p>
    </div>
);
