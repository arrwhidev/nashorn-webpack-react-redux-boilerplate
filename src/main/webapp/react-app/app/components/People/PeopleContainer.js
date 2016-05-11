import { connect } from 'react-redux';
import People from './People';
import { addPeople } from '../../actions/actions';

const mapStateToProps = state => ({
    people: state.people
});

const mapActionsToDispatch = { addPeople };

export default connect(mapStateToProps, mapActionsToDispatch)(People);
