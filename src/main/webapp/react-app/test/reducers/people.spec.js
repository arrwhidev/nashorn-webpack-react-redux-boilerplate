import { expect } from 'chai'
import reducer from '../../app/reducers/people'
import { addPeople } from '../../app/actions/actions'

describe('Reducers', () => {
    describe('people', () => {
        it('should add people when ADD_PEOPLE action fired', () => {
            const initialState = [
                { name: 'Tom' }
            ];

            const people = [
                { name: 'Jim' },
                { name: 'Tim' }
            ];

            const newState = reducer(
                initialState,
                addPeople(people)
            );

            expect(newState).to.have.lengthOf(3);
            expect(newState[0]).to.have.property('name');
            expect(newState[0].name).to.equal('Tom');
            expect(newState[1]).to.have.property('name');
            expect(newState[1].name).to.equal('Jim');
            expect(newState[2]).to.have.property('name');
            expect(newState[2].name).to.equal('Tim');
        })
    })
})