export const GETMAPSUMMARY = "GETMAPSUMMARY";

export function getSummary(article) {

  return function (dispatch) {
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&pageids=${article.pageid}`)
      .then( (summary) => summary.json())
      .then( (page) => dispatch({type: GETMAPSUMMARY, summary: page.query.pages[article.pageid]}))
  }
}
