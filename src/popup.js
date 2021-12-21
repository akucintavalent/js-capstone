const popup = document.querySelector('.popup');
const popupImg = document.getElementById('popup-img');
const popupTitle = document.getElementById('popup-title');
const popupIdbm = document.getElementById('popup-idbm');
const popupSummary = document.getElementById('popup-summary');
const popupClose = document.querySelector('.popup-close');

const baseUrl = 'https://api.tvmaze.com/episodes/';

async function getDetails(item = 1) {
  let result = await fetch(`${baseUrl}${item}`);
  result = await result.json();
  console.log(result)
  return result;
}

async function showDetails() {
  const data = await getDetails()
  const {name, image :{medium : image}, rating : {average : idbm}, summary} = data
  popupTitle.innerText = name;
  popupImg.src = image;
  popupIdbm.innerText = idbm;
  popupSummary.innerHTML = summary;
}

showDetails()
getDetails()

popupClose.addEventListener('click', ()=>  {
  popup.style.display = "none";
})