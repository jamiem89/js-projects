const books = [
    {
        "id": 1,
        "title": "Gonzo: The art of Ralph Steadman",
        "author": "Ralph Steadman",
        "category": "art",
        "img": "./img/books/gonzo.jpg"
    },
    {
        "id": 2,
        "title": "Supply and Demand. The art of Shephard Fairy",
        "author": "Shephard Fairy",
        "category": "art",
        "img": "./img/books/supply.jpg"
    },
    {
        "id": 3,
        "title": "1984",
        "author": "George Orwell",
        "category": "fictional",
        "img": "./img/books/1984.jpg"
    },
    {
        "id": 4,
        "title": "Hell's Angels",
        "author": "Hunter S Thompson",
        "category": "fiction",
        "img": "./img/books/angels.jpg"
    },
    {
        "id": 5,
        "title": "Ham on Rye",
        "author": "Charles Bukowski",
        "category": "biographical",
        "img": "./img/books/ham.jpg"
    }
];

const bookContainer = document.querySelector('.books');
const filters = document.querySelector('.filters');

function createHTML(data, cat) {
    let booksHTML = '';
    for(let i = 0; i < data.length; i++) {
        let title = data[i].title;
        let author = data[i].author;
        let category = data[i].category;
        let categorySentence = upperCase(category);
        let img = data[i].img;

        let bookHTML = `
            <li class="book" data-cat="${category}">
                <div class="book__img">
                    <img src="${img}" alt="${title}">
                </div>
                <div class="book__info">
                    <h2>${title}</h2>
                    <h3>${author}</h3>
                    <h5>${categorySentence}</h5>
                </div>
            </li>
        `;

        if(cat == 'all') {
            console.log(`aaa`);
            booksHTML += bookHTML;
        } else if(cat !== 'all') {
            console.log(`bbb`);
            if(cat == category) {
                booksHTML += bookHTML;
            }
        }
    }

    bookContainer.innerHTML = booksHTML;
}

function filterResults() {
    if(event.originalTarget.tagName == 'BUTTON') {
        createHTML(books, event.originalTarget.dataset.filter);
    }
}

function upperCase(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

createHTML(books, 'all');

filters.addEventListener('click', filterResults);

