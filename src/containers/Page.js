import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from '../components/Page';

function mapStateToProps(state) {
  return {
    summary: state.summary
  }
}

export default connect(mapStateToProps)(Page);