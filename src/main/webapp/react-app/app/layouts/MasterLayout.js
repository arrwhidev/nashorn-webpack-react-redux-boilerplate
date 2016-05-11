import React from 'react';
import Nav from '../components/Nav/Nav';

export default ({ children }) => (
    <div>
        <Nav />
        {children}
    </div>
);
