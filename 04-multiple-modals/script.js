console.log(`we're in business`);

const buttons = document.querySelectorAll('button');
const modals = document.querySelectorAll('.modal-contain');

// buttons.addEventListener('click', modalToggle);

function buttonTrigger(buttons) {
    for(let i = 0; i < buttons.length; i++){
        buttons[i].setAttribute('data-trigger', i);
        buttons[i].addEventListener('click', () => {
            modalToggle(buttons[i].dataset.trigger);
        });
    }
}

function modalToggle(index) {
    modals[index].classList.remove('hidden');
}

function modalClose(modals) {
    for(let i = 0; i < modals.length; i++){
        modals[i].addEventListener('click', (e) => {
            if(e.originalTarget.classList.contains('modal-contain')) {
                modals[i].classList.add('hidden');
            }
        });
    }
}

buttonTrigger(buttons);
modalClose(modals);
