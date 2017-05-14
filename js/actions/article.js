export const OPENARTICLE = "OPENARTICLE";
export const GETSUMMARY = "GETSUMMARY";


export function openBrowser(url) {
  return function (dispatch) {
    return dispatch({type: OPENARTICLE, url});
  };
}

export function getSummary(pageId) {
  return function (dispatch) {
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&pageids=${pageId}`)
      .then( (summary) => summary.json())
      .then( (page) => dispatch(GETSUMMARY, page.query.pages[pageId]));
  }
}
