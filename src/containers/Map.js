import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map';
import * as MapActions from '../actions/map';
import * as LocationActions from '../actions/location';

function mapStateToProps(state) {
  return {
    markers: state.map
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      mapActions: bindActionCreators(MapActions, dispatch),
      locationActions: bindActionCreators(LocationActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);