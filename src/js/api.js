/* eslint-disable linebreak-style */
export async function postData(url = '', data = {}) {
  const requestOptions = {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  };
  const response = await fetch(url, requestOptions);

  return response;
}

export async function getLikeNumber() {
  const likesCounterUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes';
  let likesCounts = await fetch(likesCounterUrl);

  likesCounts = await likesCounts.json();

  return likesCounts;
}

export async function getListMovie() {
  const listMovieUrl = 'https://api.tvmaze.com/shows';
  let listMovie = await fetch(listMovieUrl);

  listMovie = await listMovie.json();

  return listMovie;
}

export async function getPopupDetails(item) {
  const baseUrl = 'https://api.tvmaze.com/shows/';
  let result = await fetch(`${baseUrl}${item}`);

  result = await result.json();

  return result;
}

export async function getComments(id) {
  const commentGettUrl = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/comments?item_id=${id}`;
  let result = await fetch(commentGettUrl);

  result = await result.json();

  return result;
}

export async function postComments(data) {
  const commentPostUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/comments';
  const response = await postData(commentPostUrl, data);

  return response;
}

export async function postLike(index) {
  const likePostUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes';
  const likeBodyData = { item_id: `${index}` };
  const response = await postData(likePostUrl, likeBodyData);

  return response;
}