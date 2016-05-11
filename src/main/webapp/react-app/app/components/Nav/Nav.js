import React from 'react';
import { Link } from 'react-router';

export default () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">
            <ul className="nav navbar-nav">
                <li><Link to={`/app/people`}>People</Link></li>
                <li><Link to={`/app/admin`}>Admin</Link></li>
            </ul>
       </div>
   </nav>
);
