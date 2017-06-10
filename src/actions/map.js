export const GETMAPSUMMARY = "GETMAPSUMMARY";

export function getSummary(id) {

  return function (dispatch) {
    fetch(`https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&pageids=${id}`)
      .then((summary) => summary.json())
      .then((page) => {
        console.log(page);
        dispatch({type: GETMAPSUMMARY, summary: page.query.pages[id].extract})
      })
  }
}
