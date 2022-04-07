import { setPropertyLocalStorage } from './local-storage.js';
import {
  getElement,
  getAllElements,
  getValueForm
} from './manipulate-elements-dom.js';

const $form = getElement('#form');
let userShift = true;
let listFreeCrews = [1,2,3,4,5,6,7,8,9];

$form.addEventListener('submit', handleSubmitForm);

function handleSubmitForm() {
  let user_name = getValueForm($form, 'user-name');
  if(user_name) setPropertyLocalStorage('user-name',user_name);
}

getAllElements('.grid-item').forEach(function ($grid) {
  $grid.addEventListener('click', handleClickUser)
})

function templateImage(maskColor) {
  return `<img src="./src/images/mask-${maskColor}.png" width="200"/>`
}

async function handleClickUser() {
  renderImage(this)
  getElement('#await').classList.remove('d-none')
  await setTimeout(function() {
    if(listFreeCrews.length) {
      renderImage(listFreeCrews[Math.floor(Math.random() * listFreeCrews.length)])
    }
  },1000)
}

async function renderImage(currentCrew) {
  let crew = typeof currentCrew == 'number' ? currentCrew : Number(currentCrew.dataset.grid);
  const index = listFreeCrews.indexOf(crew)
  const maskColor = userShift ? 'black' : 'red';
  if(index !== -1) {
    if(typeof currentCrew == 'number') {
      getElement(`#grid-${crew}`).innerHTML = templateImage(maskColor)
    } else {
      currentCrew.innerHTML = templateImage(maskColor)
    }
    listFreeCrews.splice(index, 1)
    userShift = !userShift
  }
  await setTimeout(function () {
    getElement('#await').classList.add('d-none')
  }, 2000)
}