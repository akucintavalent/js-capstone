/* eslint-disable linebreak-style */
import { postComments, postLike } from './api.js';
import {
  addCommentToList,
  showPopupDetails,
} from './DOM-manipulations.js';

export async function commentButtonsListener() {
  const commentBtns = document.querySelectorAll('.item_comment');
  // we need this name to know which popup is opened in other modular functions.
  commentBtns.forEach((commentBtn) => {
    commentBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      await showPopupDetails(commentBtn.id);
    });
  });
}

export async function popupCommentBtnListener() {
  const name = document.getElementById('popup-title').innerText;
  const commentBtn = document.querySelector('#comment-btn');
  async function listenerFunction(e) {
    e.preventDefault();
    const userNameElement = document.getElementById('name');
    const username = userNameElement.value;
    const insightsElement = document.getElementById('insights');
    const comment = insightsElement.value;
    const form = document.querySelector('.form');
    const showThanks = document.querySelector('.show-thanks');
    const commentObj = {
      item_id: name,
      username,
      comment,
    };
    form.style.display = 'none';
    showThanks.style.display = 'block';

    postComments(commentObj).then(() => {
      let commentList;
      if (document.getElementById('comment-list-id')) {
        commentList = document.getElementById('comment-list-id');
      } else {
        const commentContainer = document.querySelector('.comments');
        commentList = document.createElement('ul');
        commentList.id = 'comment-list-id';
        commentContainer.appendChild(commentList);
      }
      const commentNumber = document.getElementById('comment-number');
      const today = new Date();
      const creationDate = `${today.getFullYear()}-${+today.getMonth() + 1}-${today.getDate()}`;
      const emptyComment = document.getElementById('empty-comment');

      emptyComment.style.display = 'none';
      addCommentToList({
        commentList,
        comment,
        username,
        creationDate,
      });
      commentNumber.innerText = `${Number(commentNumber.innerText) + 1}`;

      userNameElement.value = '';
      insightsElement.value = '';
    });
  }
  commentBtn.addEventListener('click', listenerFunction);
}

export function popupCloseListener() {
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup-close');
  function listenerFunction(e) {
    e.preventDefault();
    const commentList = document.getElementById('comment-list-id');
    const commentNumber = document.getElementById('comment-number');
    commentNumber.innerText = '0';
    document.body.classList.remove('body-popup-show');
    popup.style.display = 'none';
    commentList.remove();
  }

  popupClose.addEventListener('click', listenerFunction);
}

export async function likeListener() {
  const likes = JSON.parse(localStorage.getItem('likes') || '{}');

  Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn, index) => {
    function listenerFunction(e) {
      e.preventDefault();
      if (likes[index]) return;

      likes[index] = true;

      likeBtn.nextElementSibling.innerText = +likeBtn.nextElementSibling.innerText + 1;
      likeBtn.classList.toggle('fas');
      likeBtn.classList.toggle('far');

      localStorage.setItem('likes', JSON.stringify(likes));
      postLike(index);
    }

    likeBtn.addEventListener('click', listenerFunction);
  });
}