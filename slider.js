const slider = document.querySelector('.images');
const imgs = document.querySelectorAll('.images img');

const sliderLeft = document.querySelector('#sliderLeft');
const sliderRight = document.querySelector('#sliderRight');

let counter = 1;
const size = imgs[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

sliderRight.addEventListener('click',()=>{
    if (counter >= imgs.length - 1) return;

    slider.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

sliderLeft.addEventListener('click',()=>{
    if (counter <= 0) return;
    slider.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slider.addEventListener('transitionend', () => {
    if (imgs[counter].id === 'lastClone') {
        slider.style.transition = "none";
        counter = imgs.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (imgs[counter].id === 'firstClone') {
        slider.style.transition = "none";
        counter = imgs.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});