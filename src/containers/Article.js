import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../components/Article';
import * as ArticleActions from '../actions/article';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ArticleActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);