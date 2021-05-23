const menuButton = document.querySelector('header');
const menuItems = document.querySelectorAll('.menu-contain ul li')
const menuText = document.querySelector('header span');

function toggleMenu(){
    if(menuButton.dataset.open == 'false'){
        menuButton.dataset.open = 'true';
        console.log('opening');
        menuButton.classList.add('active');
        menuText.textContent = 'Close';
    } else {
        menuButton.dataset.open = 'false';
        console.log('closing');
        menuButton.classList.remove('active');
        menuText.textContent = 'Menu';
    }
}

function setDelay(els) {
    for(let i = 0; i < els.length; i++) {
        let delay = 300 + (i * 100);
        console.log(delay);
        els[i].style.animationDelay = `${delay}ms`;
    }
}

setDelay(menuItems);
menuButton.addEventListener('click', toggleMenu);