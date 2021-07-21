const items = 10;
const wrapper = document.querySelector(`.wrapper`);
let currentItem = 1;

setInterval(function() {
    currentItem++;
    if(currentItem > 10) {
        currentItem = 1;
    }

    console.log(currentItem);
    if(currentItem == 10) {
        wrapper.style.backgroundImage = `url(./img/bg-${currentItem}.jpg`;
    } else {
        wrapper.style.backgroundImage = `url(./img/bg-0${currentItem}.jpg`;
    }
}, 1250);
