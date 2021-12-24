/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
import {
  getLikeNumber,
  getListMovie,
  getPopupDetails,
  getComments,
} from './api.js';

export default async function showMoviesOnHomePage() {
  const hiddenLiEl = document.querySelector('#items li');
  const moviesListObj = await getListMovie();
  const likesCounts = await getLikeNumber();

  moviesListObj.forEach((movie, index) => {
    const {
      name,
      image: { medium },
      id,
    } = movie;
    const movieSequence = index + 1;

    const newLiEl = hiddenLiEl.cloneNode(true);
    newLiEl.style.display = 'flex';
    newLiEl.querySelector('.item-image').src = medium;
    newLiEl.querySelector('.name').innerText = name;
    newLiEl.querySelector('.item_comment').id = id;

    if (likesCounts[movieSequence]) {
      newLiEl.querySelector('.like-btn').classList.toggle('fas');
      newLiEl.querySelector('.like-btn').classList.toggle('far');
    }
    const [likesCount] = likesCounts.filter((el) => el.item_id === `${movieSequence}`);
    newLiEl.querySelector('.likes-count').innerText = likesCount ? likesCount.likes : 0;
    document.getElementById('items').appendChild(newLiEl);
  });
}

export function addCommentToList({
  commentList,
  username,
  comment,
  creationDate,
}) {
  const li = document.createElement('li');
  li.classList.add('comment');
  const span = document.createElement('span');
  span.innerText = `${username} : `;

  const p = document.createElement('p');
  p.innerText = comment;

  const spanTwo = document.createElement('span');
  spanTwo.innerText = creationDate;

  li.appendChild(span);
  li.appendChild(p);
  li.appendChild(spanTwo);
  commentList.insertAdjacentElement('beforeend', li);
}

export async function showPopupComment(name) {
  const commentContainer = document.querySelector('.comments');
  const commentNumber = document.getElementById('comment-number');
  await getComments(name).then((comments) => {
    const commentList = document.createElement('ul');
    commentList.id = 'comment-list-id';
    commentList.innerHTML = '';
    comments.forEach((commentItem) => {
      const {
        username,
        comment,
        creation_date: creationDate,
      } = commentItem;
      addCommentToList({
        commentList,
        username,
        comment,
        creationDate,
      });
    });
    commentNumber.innerText = comments.length || 0;

    commentContainer.appendChild(commentList);
  });
}

export async function showPopupDetails(item) {
  const popup = document.querySelector('.popup');
  const popupImg = document.getElementById('popup-img');
  const popupTitle = document.getElementById('popup-title');
  const popupImdb = document.getElementById('popup-imdb');
  const popupSummary = document.getElementById('popup-summary');
  const emptyComment = document.getElementById('empty-comment');
  const commentNumber = document.getElementById('comment-number');
  const form = document.querySelector('.form');
  const showThanks = document.querySelector('.show-thanks');

  await getPopupDetails(item).then(async (response) => {
    const {
      name, image: { medium: image },
      rating: { average: imdb },
      summary,
    } = response;

    document.body.classList.add('body-popup-show');
    popup.style.display = 'block';
    popupTitle.innerText = name;
    popupImg.src = image;
    popupImdb.innerText = imdb;
    popupSummary.innerHTML = summary;
    form.style.display = 'flex';
    showThanks.style.display = 'none';

    await getComments(name).then((comments) => {
      if (comments.error) {
        commentNumber.innerText = '0';
        emptyComment.style.display = 'block';
      } else {
        emptyComment.style.display = 'none';
        showPopupComment(name);
      }
    });
  });
}