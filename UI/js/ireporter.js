const myImage = document.getElementById('myImage');
const imageArray = ['images/sayno1.jpg', 'images/sayno2.jpg'];

let imageIndex = 0;

function changeImage() {
  myImage.setAttribute('src', imageArray[imageIndex]);
  imageIndex += 1;

  if (imageIndex >= imageArray.length) {
    imageIndex = 0;
  }
}

const intervalHandler = setInterval(changeImage, 2000);

myImage.onclick = function image() {
  clearInterval(intervalHandler);
};
