import {openModal} from './bigPicture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const container = document.querySelector('.pictures');
const fragment = document.createDocumentFragment();

const createThumbnail = (data) => {
  const {url, description, likes, comments} = data;
  const thumbnail = pictureTemplate.cloneNode(true);
  const image = thumbnail.querySelector('.picture__img');
  image.src = url;
  image.alt = description;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    openModal(data);
  });

  return thumbnail;
};

export const renderThumbnails = (pictures) => {
  pictures.forEach((picture) => {
    const post = createThumbnail(picture);
    fragment.append(post);
  });
  container.append(fragment);
};
