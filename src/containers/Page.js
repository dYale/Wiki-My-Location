import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Page from '../components/Page';

function mapStateToProps(state) {
  console.log(state);
  return {
    summary: state.page
  }
}

export default connect(mapStateToProps)(Page);