const image = document.getElementById('toggleImage');
const images = ['images/lake.jpg', 'images/mount.jpg'];
let index = 0;

image.addEventListener('click', () => {
    index = (index + 1) % images.length;
    image.src = images[index];}
);
