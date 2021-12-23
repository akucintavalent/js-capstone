/* eslint-disable linebreak-style */
import { postComments, postLike } from './api';
import {
  showPopupComment,
  showPopupDetails,
} from './DOM-manipulations';

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

export async function popupCommentBtnListener(name) {
  const commentBtn = document.getElementById('comment-btn');
  const listenerFunction = async (e) => {
    e.preventDefault();

    const userNameElement = document.getElementById('name');
    const userName = userNameElement.value;
    const insightsElement = document.getElementById('insights');
    const insights = insightsElement.value;
    const form = document.querySelector('.form');
    const showThanks = document.querySelector('.show-thanks');
    const commentObj = {
      item_id: name,
      username: userName,
      comment: insights,
    };

    await postComments(commentObj);
    await showPopupComment(name);
    userNameElement.value = '';
    insightsElement.value = '';
    form.style.display = 'none';
    showThanks.style.display = 'block';
    setTimeout(() => {
      showThanks.style.display = 'none';
    }, 5000);
  };

  commentBtn.addEventListener('click', listenerFunction);
}

export async function popupCloseListener() {
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup-close');
  const listenerFunction = () => {
    document.body.classList.remove('body-popup-show');
    popup.style.display = 'none';
  };

  popupClose.addEventListener('click', listenerFunction);
}

export async function likeListener() {
  const likes = JSON.parse(localStorage.getItem('likes') || '{}');

  Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn, index) => {
    const listenerFunction = async () => {
      if (likes[index]) return;

      likes[index] = true;

      likeBtn.nextElementSibling.innerText = +likeBtn.nextElementSibling.innerText + 1;
      likeBtn.classList.toggle('fas');
      likeBtn.classList.toggle('far');

      localStorage.setItem('likes', JSON.stringify(likes));
      postLike(index);
    };

    likeBtn.addEventListener('click', listenerFunction);
  });
}