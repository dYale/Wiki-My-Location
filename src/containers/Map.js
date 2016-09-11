import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../components/Map';
import * as MapActions from '../actions/map';

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(MapActions, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);