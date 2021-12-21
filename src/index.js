import './styles/main.css';
import logo from './images/logo.png';

import './popup.js';




window.onload = () => {
  document.getElementById('logo').src = logo;

  (async function () {
    const hiddenLiEl = document.querySelector('#items li');
    for (let i = 1; i <= 20; i += 1) {
      const {
        name,
        image: { medium },
        rating: { average },
      } = await fetch(`https://api.tvmaze.com/episodes/${i}`)
        .then((response) => response.json());
      const newLiEl = hiddenLiEl.cloneNode(true);
      newLiEl.querySelector('.item-image').src = medium;
      newLiEl.querySelector('.name').innerText = name;
      document.getElementById('items').appendChild(newLiEl);
    }
    hiddenLiEl.style.display = 'none';

    Array.from(document.getElementsByClassName('like-btn')).forEach((likeBtn) => likeBtn.addEventListener('click', function () {
      this.classList.toggle('fas');
      this.classList.toggle('far');
    }));
  })();
};