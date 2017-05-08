import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Browser from '../components/Browser';
import * as BrowserActions from '../actions/browser';
import * as ArticleActions from '../actions/article';

function mapStateToProps(state) {
  return {
    url: state.browser.url
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      articleActions: bindActionCreators(ArticleActions, dispatch),
      browserActions:  bindActionCreators(BrowserActions, dispatch)
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Browser);