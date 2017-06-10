import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map';
import * as MapActions from '../actions/map';
import * as listActions from '../actions/list';

function mapStateToProps(state) {
  return {
    markers: state.map.markers,
    summary: state.map.summary
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      mapActions: bindActionCreators(MapActions, dispatch),
      listActions: bindActionCreators(listActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);