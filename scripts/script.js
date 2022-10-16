// Создаём карточки слайдов популярных растений
let slide = [];
let img = document.querySelectorAll(".card__popular");
for (let i = 0; i < img.length; i++) {
  slide[i] = img[i].outerHTML;
  img[i].remove();
}

// Первый слайд с которого начинается заполнение карусели популярных растений
let onDefaultPosition = slide.length - 1;
// Смещение слайдов относительно друг друга
let offset = 4.72;

//  Первоначальное размещение слайдов популярных растений
let currienSlide = onDefaultPosition;
for (i = -1; i < 5; i++) {
  if (currienSlide + 1 > slide.length) currienSlide = 0;
  document
    .querySelector(".popular__plants")
    .insertAdjacentHTML("beforeend", slide[currienSlide]);
  document.querySelectorAll(".card__popular")[i + 1].style.left =
    i * 23.22 + "vw";
  if (currienSlide + 1 > slide.length) {
    currienSlide = 0;
  } else currienSlide++;
}

currienSlide = onDefaultPosition;

// Перемотка вперёд слайдов популярных растений
function forward() {
  document.querySelector(".card__popular").remove();
  for (i = 0; i < 5; i++) {
    document.querySelectorAll(".card__popular")[i].style.left =
      offset * (i - 1) + 18.5 * (i - 1) + "vw";
  }
  if (onDefaultPosition + 2 > slide.length) {
    onDefaultPosition = 0;
  } else onDefaultPosition++;
  document
    .querySelector(".popular__plants")
    .insertAdjacentHTML(
      "beforeend",
      slide[(onDefaultPosition + 5) % slide.length]
    );
  document.querySelectorAll(".card__popular")[
    document.querySelectorAll(".card__popular").length - 1
  ].style.left = "92.88vw";
  forwardBlock();
}

// Перемотка назад слайдов популярных растений
function backward() {
  document
    .querySelectorAll(".card__popular")
    [document.querySelectorAll(".card__popular").length - 1].remove();
  if (onDefaultPosition - 1 < 0) {
    onDefaultPosition = slide.length - 1;
  } else onDefaultPosition--;
  // tmp = document.querySelectorAll(".card__popular");
  for (i = 0; i < document.querySelectorAll(".card__popular").length; i++) {
    document.querySelectorAll(".card__popular")[i].style.left =
      i * 23.22 + "vw";
  }
  document
    .querySelector(".popular__plants")
    .insertAdjacentHTML("afterbegin", slide[onDefaultPosition]);
  document.querySelector(".card__popular").style.left = "-23.22vw";
  backwardBlock();
}

function forwardBlock() {
  document.querySelector(".btn__popular__right").onclick = null;
  setTimeout(function () {
    document.querySelector(".btn__popular__right").onclick = forward;
  }, 700);
}

function backwardBlock() {
  document.querySelector(".btn__popular__left").onclick = null;
  setTimeout(function () {
    document.querySelector(".btn__popular__left").onclick = backward;
  }, 700);
}
document.querySelector(".btn__popular__right").onclick = forward;
document.querySelector(".btn__popular__left").onclick = backward;

// Создаём карточки слайдов популярных кашпо
let slidePots = [];
let imgPots = document.querySelectorAll(".popular__pots");
for (let i = 0; i < img.length; i++) {
  slidePots[i] = imgPots[i].outerHTML;
  imgPots[i].remove();
}

// Первый слайд с которого начинается заполнение карусели популярных кашпо
let onDefaultPositionPots = slidePots.length - 1;
// Смещение слайдов относительно друг друга
let offsetPots = 4.72;

//  Первоначальное размещение слайдов популярных кашпо
let currienSlidePots = onDefaultPositionPots;
for (i = -1; i < 5; i++) {
  if (currienSlidePots + 1 > slidePots.length) currienSlidePots = 0;
  document
    .querySelector(".cards__pots")
    .insertAdjacentHTML("beforeend", slidePots[currienSlidePots]);
  document.querySelectorAll(".popular__pots")[i + 1].style.left =
    i * 23.22 + "vw";
  if (currienSlidePots + 1 > slidePots.length) {
    currienSlidePots = 0;
  } else currienSlidePots++;
}
currienSlidePots = onDefaultPositionPots;

// Перемотка вперёд слайдов популярных кашпо
function forwardPots() {
  document.querySelector(".popular__pots").remove();
  for (i = 0; i < 5; i++) {
    document.querySelectorAll(".popular__pots")[i].style.left =
      offsetPots * (i - 1) + 18.5 * (i - 1) + "vw";
  }
  if (onDefaultPositionPots + 2 > slidePots.length) {
    onDefaultPositionPots = 0;
  } else onDefaultPositionPots++;
  document
    .querySelector(".cards__pots")
    .insertAdjacentHTML(
      "beforeend",
      slidePots[(onDefaultPositionPots + 5) % slidePots.length]
    );
  document.querySelectorAll(".popular__pots")[
    document.querySelectorAll(".popular__pots").length - 1
  ].style.left = "92.88vw";
  forwardBlockPots();
}

// Перемотка назад слайдов популярных кашпо
function backwardPots() {
  document
    .querySelectorAll(".popular__pots")
    [document.querySelectorAll(".popular__pots").length - 1].remove();
  if (onDefaultPositionPots - 1 < 0) {
    onDefaultPositionPots = slidePots.length - 1;
  } else onDefaultPositionPots--;
  //  tmp = document.querySelectorAll(".card__popular");
  for (i = 0; i < document.querySelectorAll(".popular__pots").length; i++) {
    document.querySelectorAll(".popular__pots")[i].style.left =
      i * 23.22 + "vw";
  }
  document
    .querySelector(".cards__pots")
    .insertAdjacentHTML("afterbegin", slidePots[onDefaultPositionPots]);
  document.querySelector(".popular__pots").style.left = "-23.22vw";
  backwardBlockPots();
}

function forwardBlockPots() {
  document.querySelector(".btn__popular__right__pots").onclick = null;
  setTimeout(function () {
    document.querySelector(".btn__popular__right__pots").onclick = forwardPots;
  }, 700);
}

function backwardBlockPots() {
  document.querySelector(".btn__popular__left__pots").onclick = null;
  setTimeout(function () {
    document.querySelector(".btn__popular__left__pots").onclick = backwardPots;
  }, 700);
}

document.querySelector(".btn__popular__right__pots").onclick = forwardPots;
document.querySelector(".btn__popular__left__pots").onclick = backwardPots;

let faqList = document.querySelectorAll(".faq__list");
let faqDescription = document.querySelectorAll(".faq__description");
let checkMark = document.querySelectorAll(".check__mark");
document.querySelector("body").addEventListener("click", openFaq);

function openFaq(event) {
  if (event.target.closest(".faq__list")) {
    for (i = 0; i < faqList.length; i++) {
      if (!faqDescription[i].classList.contains("_hidden")) {
        faqDescription[i].classList.add("_hidden");
        checkMark[i].classList.toggle("rotated");
        i++;
      }
      if (event.target.closest(".faq__list" + [i + 1])) {
        faqDescription[i].classList.toggle("_hidden");
        checkMark[i].classList.toggle("rotated");
      }
    }
  } else {
    for (i = 0; i < faqList.length; i++) {
      if (
        !faqDescription[i].classList.contains("_hidden") &&
        !event.target.closest(".faq__container")
      ) {
        faqDescription[i].classList.add("_hidden");
        checkMark[i].classList.toggle("rotated");
      }
    }
  }
}
