const grid = document.querySelector(`.grid`);
const gridSize = 6;
let baseColor = `333333`;
const colorButton = document.querySelector(`.color-button`);

function createGrid(size){
    grid.innerHTML = '';
    for (let i = 0; i < (size * size); i++) {
        let el = document.createElement('div');
        el.style.width = `${100 / gridSize}%`;
        el.style.height = `${100 / gridSize}%`;
        el.style.backgroundColor = `#${baseColor}`;
        let opacity = Math.floor(Math.random() * (99 - 10 + 1) + 10);
        el.style.opacity = `0.${opacity}`;
        grid.appendChild(el);
    }
    let els = grid.querySelectorAll('div');
    fluctuate(els);
}

function setColor(){
    baseColor = Math.floor(Math.random()*16777215).toString(16);
    createGrid(gridSize);
    return baseColor;
}

function fluctuate(nodelist) {
    nodelist.forEach(function(element){
        var timer = Math.floor(Math.random() * (30 - 10 + 1) + 10);
        var opacity = element.style.opacity * 100;
        var countUp = Boolean(Math.round(Math.random()))
        setInterval(function() {
            if(opacity <= 99 && countUp == true) {
                opacity += 1;
                element.style.opacity = `0.${opacity}`;
                if(opacity == 99){
                    countUp = false;
                }
            } else if(opacity >= 10 && countUp == false) {
                opacity -= 1;
                element.style.opacity = `0.${opacity}`;
                if(opacity == 10){
                    countUp = true;
                }
            }
            element.style.opacity = `0.${opacity}`;
        }, timer);
    })
};

// Set random colour
baseColor = setColor();

colorButton.addEventListener('click', function() {
    baseColor = setColor();
});