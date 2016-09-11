import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Browser from '../components/Browser';
import * as BrowserActions from '../actions/browser';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BrowserActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Browser);