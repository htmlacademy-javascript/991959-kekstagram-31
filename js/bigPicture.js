import {isEscapeKey} from './utils.js';

const body = document.querySelector('body');
const modal = document.querySelector('.big-picture');
const modalPicture = modal.querySelector('.big-picture__img img');
const likesCount = modal.querySelector('.likes-count');
const modalCommentsTotal = modal.querySelector('.social__comment-total-count');
const modalCloseBtn = modal.querySelector('.big-picture__cancel');
const modalCaption = modal.querySelector('.social__caption');

const renderPictureDetails = ({url, description, likes, comments}) => {
  modalPicture.src = url;
  modalPicture.alt = description;
  likesCount.textContent = likes;
  modalCaption.textContent = description;
  modalCommentsTotal.textContent = comments.length;
};

const closeModal = () => {
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  modalCloseBtn.removeEventListener('click', onCloseModalBtnClick);
};

function onCloseModalBtnClick(evt) {
  evt.preventDefault();
  closeModal();
}

function onEscKeyDown(evt) {
  if (isEscapeKey) {
    evt.preventDefault();
    closeModal();
  }
}

export const openModal = (data) => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  renderPictureDetails(data);
  document.addEventListener('keydown', onEscKeyDown);
};

modalCloseBtn.addEventListener('click', closeModal);
