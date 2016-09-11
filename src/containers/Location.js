import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Location from '../components/Location';
import * as LocationActions from '../actions/location';

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(LocationActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Location);