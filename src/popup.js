const popup = document.querySelector('.popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupIdbm = document.getElementById('popup-idbm');
const popupSummary = document.getElementById('popup-summary');
const popupClose = document.querySelector('.popup-close');

const baseUrl = 'https://api.tvmaze.com/episodes/';

async function getDetails(item) {
  let result = await fetch(`${baseUrl}${item}`);
  result = await result.json();
  return result;
}

export default async function showDetails(item = 1) {
  const data = await getDetails(item);
  const {
    name, image: { medium: image },
    rating: { average: idbm },
    summary,
  } = data;
  popup.style.display = 'block';
  popupTitle.innerText = name;
  popupImg.src = image;
  popupIdbm.innerText = idbm;
  popupSummary.innerHTML = summary;
}

popupClose.addEventListener('click', () => {
  popup.style.display = 'none';
});