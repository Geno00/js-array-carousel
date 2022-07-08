const imagesList = [
    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",

];

let slideActive = 0;

const itemsDom = document.querySelector('.items');

for (let i = 0; i < imagesList.length; i++) {
    itemsDom.innerHTML += ` <div class="item">
                                <img class="img-slide" src="${imagesList[i]}"/>
                            </div>`;
}

const itemList = document.getElementsByClassName('item');

itemList[slideActive].classList.add('show');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click',
    function () {
        itemList[slideActive].classList.remove('show');
        slideActive++;
        itemList[slideActive].classList.add('show');

        prev.classList.remove('hidden');

        if (slideActive == itemList.length - 1) {
            next.classList.add('hidden');
        }
    }
)

prev.addEventListener('click',
    function () {
        itemList[slideActive].classList.remove('show');
        slideActive--;
        itemList[slideActive].classList.add('show');

        next.classList.remove('hidden');

        if (slideActive == 0) {
            prev.classList.add('hidden');
        }
    }
)