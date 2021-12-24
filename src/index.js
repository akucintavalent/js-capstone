/* eslint-disable linebreak-style */
import './styles/main.css';
import logo from './images/logo.png';

import showMoviesOnHomePage from './js/DOM-manipulations.js';
import {
  commentButtonsListener,
  likeListener, popupCloseListener,
  popupCommentBtnListener,
} from './js/listeners.js';

window.addEventListener('DOMContentLoaded', async () => {
  document.getElementById('logo').src = logo;

  await showMoviesOnHomePage();

  await likeListener();
  await commentButtonsListener();
  popupCommentBtnListener();
  popupCloseListener();
});