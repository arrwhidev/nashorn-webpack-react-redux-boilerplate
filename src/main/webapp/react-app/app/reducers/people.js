import * as types from '../actions/types';

export default (people = [], action) => {
    switch(action.type) {
        case types.ADD_PEOPLE:
            return [...people, ...action.data];
        default:
            return people;
    };
};
