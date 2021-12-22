import './styles/main.css';
import logo from './images/logo.png';

import showPopup from './popup.js';
import postData from './post-data.js';

const likes = JSON.parse(localStorage.getItem('likes') || '{}');

window.onload = () => {
  document.getElementById('logo').src = logo;

  async function run() {
    const hiddenLiEl = document.querySelector('#items li');
    let likesCounts = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes');
    likesCounts = await likesCounts.json();
    let listMovie = await fetch('https://api.tvmaze.com/shows/1/episodes');
    listMovie = await listMovie.json();
    listMovie.forEach((movie, index) => {
      const {
        name,
        image: { medium },
      } = movie;
      const newLiEl = hiddenLiEl.cloneNode(true);
      newLiEl.style.display = 'flex';
      newLiEl.querySelector('.item-image').src = medium;
      newLiEl.querySelector('.name').innerText = name;
      newLiEl.querySelector('.item_detail').id = index + 1;
      if (likes[index + 1]) {
        newLiEl.querySelector('.like-btn').classList.toggle('fas');
        newLiEl.querySelector('.like-btn').classList.toggle('far');
      }
      const [likesCount] = likesCounts.filter((el) => el.item_id === `${index + 1}`);
      newLiEl.querySelector('.likes-count').innerText = likesCount ? likesCount.likes : 0;
      document.getElementById('items').appendChild(newLiEl);
    });
    Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn, index) => {
      const listener = async () => {
        if (likes[index]) return;
        likes[index] = true;
        // .likes-count element
        likeBtn.nextElementSibling.innerText = +likeBtn.nextElementSibling.innerText + 1;
        localStorage.setItem('likes', JSON.stringify(likes));
        await postData('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/tkXsqcuViZTSE1UznPEd/likes', { item_id: `${index}` });
        likeBtn.classList.toggle('fas');
        likeBtn.classList.toggle('far');
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