import * as types from './types';

export const addPeople = people => {
    return {
        type: types.ADD_PEOPLE,
        data: people
    };
};
