import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import List from '../components/List';
import * as ListActions from '../actions/list';

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(List);