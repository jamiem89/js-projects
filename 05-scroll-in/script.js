const scrollToButton = document.querySelector('.scroll-to');
const scrollElements = document.querySelectorAll(`.fade-in`);

function smoothScroll() {
        const scrollTarget = document.querySelectorAll('section');
        scrollTarget[1].scrollIntoView({
            behavior: 'smooth'
        });
};
const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

function elementOutofView(el) {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

function displayScrollElement(element){
  element.classList.add("active");
};


function handleScrollAnimation() {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

scrollToButton.addEventListener('click', smoothScroll);