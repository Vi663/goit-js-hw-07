const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryList = document.getElementById('gallery');
const imageList = images.flatMap((image) => {
  const itemEl = document.createElement('li');
  const imgEl = document.createElement('img');
  itemEl.classList.add('list-item');
  imgEl.src = image.url;
  imgEl.alt = image.alt;
  imgEl.width = 300;
  imgEl.classList.add('list-item__image');

  itemEl.insertAdjacentElement('beforeend', imgEl);
  galleryList.insertAdjacentElement('beforeend', itemEl);
  console.log(galleryList);

});
galleryList.classList.add('list');