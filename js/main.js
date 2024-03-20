const MIN_LIKES = 15;
const MAX_LIKES = 200;
const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;

const message = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Василий',
  'Артём',
  'Эльвира',
  'Мария',
  'Ярослав',
  'Луиза',
];

const description = [
  'Лучший вид из окна',
  'Если чётко сформулировать желание для Вселенной, то всё обязательно сбудется.',
  'Как же круто тут кормят',
  'Вот это тачка!',
  'Тестим новую камеру!',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
];

const getRandomInteger = (a, b) => {
  const minValue = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const maxValue = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (maxValue - minValue + 1) + minValue;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createMessage = () => {
  const messages = Array.from({length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(message));

  const uniqueMessages = [...new Set(messages)];
  return uniqueMessages.join(' ');
};

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg.`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPost = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(description),
  likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
  comments:  Array.from(
    {length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS)},
    (_, commentIndex) => createComment(commentIndex + 1)
  ),
});

const getPost = () =>
  Array.from({length: 25}, (_, postIndex) =>
    createPost(postIndex + 1)
  );

// console.log(getPost());
getPost();
