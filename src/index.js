/* eslint-disable linebreak-style */
import './styles/main.css';
import logo from './images/logo.png';

import showMoviesOnHomePage from './DOM-manipulations.js';
import { commentButtonsListener, likeListener, popupCloseListener } from './listeners.js';

window.onload = () => {
  document.getElementById('logo').src = logo;

  async function run() {
    await showMoviesOnHomePage();

    await likeListener();
    await commentButtonsListener();
    popupCloseListener();
  }
  run();
};