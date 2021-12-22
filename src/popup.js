/* eslint-disable linebreak-style */
const popup = document.querySelector('.popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupImdb = document.getElementById('popup-imdb');
const popupSummary = document.getElementById('popup-summary');
const popupClose = document.querySelector('.popup-close');
const commentList = document.querySelector('.comment_list');
const commentNumber = document.getElementById('comment-number');
const emptyComment = document.getElementById('empty-comment');
const userNameElement = document.getElementById('name');
const insightsElement = document.getElementById('insights');
const commentBtn = document.getElementById('comment-btn');
const form = document.querySelector('.form');
const showThanks = document.querySelector('.show-thanks');

const baseUrl = 'https://api.tvmaze.com/episodes/';
const involvementUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/comments';
async function getDetails(item) {
  let result = await fetch(`${baseUrl}${item}`);
  result = await result.json();
  return result;
}

async function getComments(id) {
  let result = await fetch(`${involvementUrl}?item_id=${id}`);
  result = await result.json();
  return result;
}

async function showComment(name) {
  const comments = await getComments(name);
  commentList.innerHTML = '';
  comments.forEach((commentItem, index) => {
    const {
      username,
      comment,
      creation_date: creationDate,
    } = commentItem;
    const li = document.createElement('li');
    li.classList.add('comment');
    const span = document.createElement('span');
    const p = document.createElement('p');
    const spanTwo = document.createElement('span');
    span.innerText = `${username} : `;
    p.innerText = comment;
    spanTwo.innerText = creationDate;
    li.appendChild(span);
    li.appendChild(p);
    li.appendChild(spanTwo);
    commentList.insertAdjacentElement('beforeend', li);
    commentNumber.innerText = index + 1;
  });
}

async function postComment(obj) {
  const response = await fetch(involvementUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  });
  return response.text();
}

export default async function showDetails(item) {
  document.body.classList.add('body-popup-show');
  const data = await getDetails(item);
  const {
    name, image: { medium: image },
    rating: { average: imdb },
    summary,
  } = data;
  const comments = await getComments(name);

  popup.style.display = 'block';
  popupTitle.innerText = name;
  popupImg.src = image;
  popupImdb.innerText = imdb;
  popupSummary.innerHTML = summary;
  commentList.innerHTML = '';
  form.style.display = 'flex';
  showThanks.style.display = 'none';

  if (comments.error) {
    commentNumber.innerText = '0';
    emptyComment.style.display = 'block';
  } else {
    showComment(name);
  }

  commentBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    const userName = userNameElement.value;
    const insights = insightsElement.value;
    const commentObj = {
      item_id: name,
      username: userName,
      comment: insights,
    };
    await postComment(commentObj);
    await showComment(name);
    userNameElement.value = '';
    insightsElement.value = '';
    form.style.display = 'none';
    showThanks.style.display = 'block';
    setTimeout(() => {
      showThanks.style.display = 'none';
    }, 5000);
  });
}

popupClose.addEventListener('click', () => {
  document.body.classList.remove('body-popup-show');

  popup.style.display = 'none';
});