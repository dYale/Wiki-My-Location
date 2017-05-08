export const OPENARTICLE = "OPENARTICLE";

export function openBrowser(url) {
  return function (dispatch) {
    return dispatch({type: OPENARTICLE, url});
  };
}
