// Review information
const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        color: 'dodgerblue'
    },
    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        color: 'fuchsia'
    },
    {
        id: 3,
        name: "Peter Jones",
        job: "Intern",
        img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        color: 'cadetblue'
    },
    {
        id: 4,
        name: "Bill Anderson",
        job: "The Boss",
        img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
        color: 'DarkSlateBlue'
    },
  ];

// Grab review elements
const reviewContainer = document.querySelector(`.review`);
const reviewImage = document.querySelector(`#reviewImage`);
const reviewName = document.querySelector(`#reviewName`);
const reviewTitle = document.querySelector(`#reviewTitle`);
const reviewContent = document.querySelector(`#reviewContent`);

// Grab nav buttons
const buttonNext = document.querySelector('#buttonNext');
const buttonPrev = document.querySelector('#buttonPrev');
const buttonRandom = document.querySelector('#buttonRandom');

// Set the first review
let reviewNumber = 0;

// Set review function

function setReview(index) {
    let reviewData = reviews[index];
    reviewContainer.style.setProperty('--review-color', reviewData.color);
    reviewImage.src = reviewData.img;
    reviewName.textContent = reviewData.name;
    reviewTitle.textContent = reviewData.job;
    reviewContent.textContent = reviewData.text;
}

function nextReview() {
    reviewNumber += 1;
    if (reviewNumber >= reviews.length) {
        console.log(`too many`);
        reviewNumber = 0;
    }
    setReview(reviewNumber);
}

function prevReview() {
    console.log('change to prev');
    reviewNumber -= 1;
    if (reviewNumber <= -1) {
        console.log(`too few`);
        reviewNumber = (reviews.length - 1);
    }
    setReview(reviewNumber);
}

function randomReview() {
    reviewNumber = Math.floor(Math.random() * reviews.length);
    setReview(reviewNumber);
}

buttonNext.addEventListener('click', nextReview);
buttonPrev.addEventListener('click', prevReview);
buttonRandom.addEventListener('click', randomReview);
