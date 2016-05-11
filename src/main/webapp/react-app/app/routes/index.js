import React from 'react';
import { Route } from 'react-router';
import MasterLayout from '../layouts/MasterLayout';
import PeopleLayout from '../layouts/PeopleLayout';
import AdminLayout from '../layouts/AdminLayout';

export default (
    <Route path="/app" component={MasterLayout}>
        <Route path="people" component={PeopleLayout} />
        <Route path="admin" component={AdminLayout} />
    </Route>
);
