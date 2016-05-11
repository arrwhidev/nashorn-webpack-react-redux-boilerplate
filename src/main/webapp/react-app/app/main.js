import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, browserHistory } from 'react-router';
import { addPeople } from './actions/actions';
import routes from './routes';
import reducers from './reducers';
import '../assets/main.css';

const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);
syncHistoryWithStore(browserHistory, store);

// Simulate fetching data from a server.
const peopleFromServer = [
    { firstName: "Abraham", secondName: "Lincoln", age: 207 },
    { firstName: "Thomas", secondName: "Jefferson", age: 273 },
    { firstName: "George", secondName: "Washington", age: 284 }
];
store.dispatch(addPeople(peopleFromServer));

ReactDOM.render(
<Provider store={store}>
    <Router history={browserHistory}>
        {routes}
    </Router>
</Provider>, document.getElementById('root'));
