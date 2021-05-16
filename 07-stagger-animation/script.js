const toAnimate = document.querySelectorAll(`.js-stagger`);

function staggerAnimation(els) {
    for(let i = 0; i < els.length; i++) {
        let delay = i * 100;
        console.log(delay);
        els[i].style.animationDelay = `${delay}ms`;
    }
}

staggerAnimation(toAnimate);