import './styles/main.css';
import logo from './images/logo.png';

import showPopup from './popup.js';

window.onload = () => {
  document.getElementById('logo').src = logo;

  async function run() {
    const hiddenLiEl = document.querySelector('#items li');
    let listMovie = await fetch('https://api.tvmaze.com/shows/1/episodes');
    listMovie = await listMovie.json();
    listMovie.forEach((movie, index) => {
      const {
        name,
        image: { medium },
      } = movie;
      const newLiEl = hiddenLiEl.cloneNode(true);
      newLiEl.querySelector('.item-image').src = medium;
      newLiEl.querySelector('.name').innerText = name;
      newLiEl.querySelector('.item_detail').id = index + 1;
      document.getElementById('items').appendChild(newLiEl);
    });
    hiddenLiEl.style.display = 'none';
    Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn) => likeBtn.addEventListener('click', () => {
      likeBtn.classList.toggle('fas');
      likeBtn.classList.toggle('far');
    }));
    const detailBtns = document.querySelectorAll('.item_detail');
    detailBtns.forEach((detail) => {
      detail.addEventListener('click', (e) => {
        e.preventDefault();
        showPopup(detail.id);
      });
    });
  }
  run();
};