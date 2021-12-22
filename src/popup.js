/* eslint-disable linebreak-style */
const popup = document.querySelector('.popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupImdb = document.getElementById('popup-imdb');
const popupSummary = document.getElementById('popup-summary');
const popupClose = document.querySelector('.popup-close');

const baseUrl = 'https://api.tvmaze.com/episodes/';

async function getDetails(item) {
  let result = await fetch(`${baseUrl}${item}`);
  result = await result.json();
  return result;
}

export default async function showDetails(item = 1) {
  document.body.classList.add('body-popup-show');
  const data = await getDetails(item);
  const {
    name, image: { medium: image },
    rating: { average: imdb },
    summary,
  } = data;
  popup.style.display = 'block';
  popupTitle.innerText = name;
  popupImg.src = image;
  popupImdb.innerText = imdb;
  popupSummary.innerHTML = summary;
}

popupClose.addEventListener('click', () => {
  document.body.classList.remove('body-popup-show');

  popup.style.display = 'none';
});