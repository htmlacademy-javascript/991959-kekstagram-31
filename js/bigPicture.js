import {isEscapeKey} from './utils.js';

const body = document.querySelector('body');
const modal = document.querySelector('.big-picture');
const modalPicture = modal.querySelector('.big-picture__img img');
const likesCount = modal.querySelector('.likes-count');
const modalCommentsTotal = modal.querySelector('.social__comment-total-count');
const modalCloseBtn = modal.querySelector('.big-picture__cancel');
const modalCaption = modal.querySelector('.social__caption');
const modalCommentsShown = modal.querySelector('.social__comment-shown-count');
const commentList = document.querySelector('.social__comments');
const socialLoader = modal.querySelector('.social__comments-loader');
let commentsArr = [];
let currentCount = 0;

const createComment = ({avatar, name, message}) => {
  const comment = document.createElement('li');
  comment.innerHTML =
    `<img class="social__picture" src=${avatar} alt=${name} width="35" height="35"><p class="social__text">${message}</p>`;
  comment.classList.add('social__comment');

  return comment;
};

const renderNextComments = () => {
  const fragment = document.createDocumentFragment();
  const renderedComments = commentsArr.slice(currentCount, currentCount + 5);

  renderedComments.forEach((comment) => {
    const commentElement = createComment(comment);
    fragment.append(commentElement);
  });
  commentList.append(fragment);
  currentCount += 5;

  if (currentCount < commentsArr.length) {
    modalCommentsShown.textContent = currentCount;
  } else {
    modalCommentsShown.textContent = commentsArr.length;
    socialLoader.classList.add('hidden');
  }
};

const renderComments = (comments) => {
  commentList.innerHTML = '';
  commentsArr = comments;
  renderNextComments();

  socialLoader.addEventListener('click', renderNextComments);
};

const clearComments = () => {
  currentCount = 0;
  socialLoader.classList.remove('hidden');
};

const renderPictureDetails = ({url, description, likes, comments}) => {
  modalPicture.src = url;
  modalPicture.alt = description;
  likesCount.textContent = likes;
  modalCaption.textContent = description;
  modalCommentsTotal.textContent = comments.length;
};

const closeModal = () => {
  clearComments();
  modal.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
};

function onEscKeyDown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

export const openModal = (data) => {
  modal.classList.remove('hidden');
  body.classList.add('modal-open');
  renderPictureDetails(data);
  document.addEventListener('keydown', onEscKeyDown);
  renderComments(data.comments);

  modalCloseBtn.addEventListener('click', closeModal);
};
