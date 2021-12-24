/**
 * @jest-environment jsdom
 */

import fetch from 'cross-fetch';

import showMoviesOnHomePage from '../js/DOM-manipulations.js';

global.fetch = fetch;

describe('test items counter', () => {
  test('items counter should be 39', async () => {
    document.body.innerHTML = `
    <header>
    <ul>
      <li>
        <img src="#" id="logo" alt="movies logo">
      </li>
      <li><a id="movies" href="">Movies</a></li>
      <li><a id="comments" href="">Comments</a></li>
      <li><a id="imDb" href="">Ratings</a></li>
    </ul>
  </header>
  <main>
    <ul id="items">
      <li>
        <img class="item-image" src="#" alt="spaceship">
        <div class="name-like">
          <p class="name">Space 1</p>
          <i class="like-btn far fa-heart"></i>
          <p class="likes-count">4</p>
        </div>
        <a class="item_comment" href="">Comments</a>
        <a class="item_detail" href="">Reserve</a>
      </li>
    </ul>
  </main>
  <div class="popup">
    <i class="far fa-times-circle popup-close"></i>
    <div class="popup_container">
      <img src="#" alt="" id="popup-img">
      <h2 id="popup-title">-</h2>
      <ul>
        <li><span class="popup_title-sub">IDBm</span> <span id="popup-imdb"></span></li>
        <li><span class="popup_title-sub">Summary</span> <p id="popup-summary"></p></li>
      </ul>
      <details class="form">
        <summary>Add a comment</summary>
        <input type="text" name="name" id="name" placeholder="Your name" required>
        <textarea name="insights" id="insights" cols="25" rows="3" placeholder="Your insights" required></textarea>
        <button type="submit" id="comment-btn">Submit</button>
      </details>
      <div class="show-thanks">
        Thank you for your comment ❤😊✅
      </div>
      <div class="comments">
        <h3 class="comments_title">Comments (<span id="comment-number">0</span>)</h3>
        <span id="empty-comment">There is no comment.</span>
      </div>
    </div>
  </div>
  <footer class="center-txt"> Created by Furkan Denizhan and Bohdan Shcherbak under MIT license.</footer>
    `;
    await showMoviesOnHomePage();
    const moviesLink = document.getElementById('movies');
    expect(moviesLink.innerText).toContain('(240)');
  });
});
