import './styles/main.css';
import logo from './images/logo.png';

import showPopup from './popup.js';
import postData from './post-data.js';

const likes = JSON.parse(localStorage.getItem('likes') || '{}');

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
    Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn, index) => {
      const listener = async () => {
        likes[index] = true;
        localStorage.setItem('likes', JSON.stringify(likes));
        await postData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes', { item_id: `${index}` });
        likeBtn.classList.toggle('fas');
        likeBtn.classList.toggle('far');
        likeBtn.removeEventListener(listener);
      };
      likeBtn.addEventListener('click', listener);
    });
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