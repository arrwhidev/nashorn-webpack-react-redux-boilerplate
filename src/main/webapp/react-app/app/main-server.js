import 'babel-polyfill';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, RouterContext, match, createMemoryHistory } from 'react-router';
import { addPeople } from './actions/actions';
import routes from './routes';
import reducers from './reducers';

const getErrorHtml = ex => `<html><body><h1>Error!</h1><p>${ex.message}</p></body></html>`;

export function render(path, personList) : string {
    const store = createStore(
        combineReducers({
            ...reducers,
            routing: routerReducer
        })
    );

    const memoryHistory = createMemoryHistory();
    syncHistoryWithStore(memoryHistory, store);
    store.dispatch(addPeople(personList)); // Dispatch data from Java.

    let html;
    match({ routes, location: path }, (error:Object, redirectLocation:Object, renderProps:Object) => {
        try {
            html = renderToString(
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );
        } catch(ex) {
            html = getErrorHtml(ex);
        }
    });
    return html;
}
