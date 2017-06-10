export const OPENARTICLE = "OPENARTICLE";
export const GETSUMMARY = "GETSUMMARY";
import { NavigationActions } from 'react-navigation'

export function openBrowser(url) {
  return function (dispatch) {
    return dispatch({type: OPENARTICLE, url});
  };
}

export function getSummary(article, nav) {

  const navigateAction = NavigationActions.navigate({

    routeName: 'Article',

    params: article,

    action: NavigationActions.navigate({routeName: 'Summary'})
  });

  return function (dispatch) {
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&pageids=${article.pageid}`)
      .then((summary) => summary.json())
      .then((page) => dispatch({type: GETSUMMARY, summary: page.query.pages[article.pageid]}))
      .then(() => nav.navigate("Summary", {...article}));
  }
}
