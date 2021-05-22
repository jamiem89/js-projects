var currentTime = new Date();
var currentHours = currentTime.getHours();
var currentMinutes = currentTime.getMinutes();
var currentSeconds = currentTime.getSeconds();
console.log(`${currentHours}: ${currentMinutes}: ${currentSeconds}`);

function createClock(){
    let hourContainer = document.querySelector('.hours');
    let minuteContainer = document.querySelector('.minutes');
    let secondContainer = document.querySelector('.seconds');

    for (let i = 0 ; i <= 11; i++) {
        let hourHTML = document.createElement('span');
        hourHTML.setAttribute('data-value', `${i}`)
        hourContainer.appendChild(hourHTML);
    }

    for (let i = 0 ; i <= 59; i++) {
        let minuteHTML = document.createElement('span');
        minuteHTML.setAttribute('data-value', `${i}`)
        minuteContainer.appendChild(minuteHTML);
    }

    for (let i = 0 ; i <= 59; i++) {
        let secondHTML = document.createElement('span');
        secondHTML.setAttribute('data-value', `${i}`)
        secondContainer.appendChild(secondHTML);
    }
};

function setTime() {
    // Set the time
    var currentTime = new Date();
    var currentHours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();

    if(currentHours > 12) {
        currentHours = currentHours - 12;
    }

    // Get the time blocks
    var hourBlocks = document.querySelectorAll('.hours span');
    var minuteBlocks = document.querySelectorAll('.minutes span');
    var secondBlocks = document.querySelectorAll('.seconds span');


    updateBars(currentHours, hourBlocks);
    updateBars(currentMinutes, minuteBlocks);
    updateBars(currentSeconds, secondBlocks);
}

function updateBars(currentUnit, unitElements){
    // clear blocks if at limit
    if(currentUnit== 0) {
        unitElements.forEach((element) => {
            element.classList.remove('dinged');
            });
    };
    // add class to current value
    for(let i = 0; i <= currentUnit; i++) {
        unitElements[i].classList.add('dinged');
    }
}

createClock();

setInterval(setTime, 1000);