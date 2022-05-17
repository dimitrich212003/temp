var readMore = document.querySelectorAll(".readMore");
var mainText = document.querySelectorAll(".item-body__text");
var points = document.querySelectorAll(".points-content__title");
var text = document.querySelectorAll(".points-content__text");
var images = document.querySelectorAll(".points-main__image");

var textarea = document.getElementById("message-to-send");

const showHideButton = document.querySelector(".button__hide-show");
const showHideText = document.querySelector(".text__hide-show");
const showHideBlock = document.querySelector(".b-hide-show");

const instrument = document.querySelectorAll(".ltc-instr__item");
const instrumentImage = document.querySelectorAll(".ltc-instr__image");
const openn = document.getElementById("open");

const functionalItem = document.querySelectorAll(".ltc-ff__item");
const functional = document.querySelectorAll(".ltc-ff__item_title");
const funImage = document.querySelectorAll(".ltc-ff__img-t");
const funMainImage = document.querySelector(".ltc-ff__img");

if (functional) {
  for (let i = 0; i < functional.length; i++) {
    functionalItem[i].addEventListener("click", function (e) {
      if (functional[i].classList.contains("active")) {
        funImage.forEach((e) => {
          e.classList.remove("_active");
        });
        funImage[i].classList.add("_active");
        funMainImage.classList.remove("_active");
      } else {
        funImage.forEach((e) => {
          e.classList.remove("_active");
        });
        funImage[i].classList.remove("_active");
        funMainImage.classList.add("_active");
      }
    });
  }
}

function ifOpen() {
  instrument.forEach((instr) => {
    if (!instr.classList.contains("ssshow")) {
      openn.classList.add("opennn");
    }
  });
}

if (instrument) {
  for (let i = 0; i < instrument.length; i++) {
    instrument[i].addEventListener("mouseover", function (e) {
      // this.classList.add("active");
      instrumentImage[i].style.left = "0";
      instrumentImage[i].classList.add("ssshow");
      openn.classList.remove("opennn");
    });
    instrument[i].addEventListener("mouseout", function (e) {
      // this.classList.remove("active");
      instrumentImage[i].style.left = "-100vw";
      instrumentImage[i].classList.remove("ssshow");
      ifOpen();
    });
  }
}

function autosize() {
  var el = this;
  setTimeout(function () {
    el.style.cssText = "height:auto; padding:0";
    // for box-sizing other than "content-box" use:
    // el.style.cssText = '-moz-box-sizing:content-box';
    el.style.cssText = "height:" + el.scrollHeight + "px";
    el.scrollTop = el.scrollHeight;
  }, 0);
}

if (textarea) {
  textarea.addEventListener("input", autosize);
}

if (showHideButton) {
  showHideButton.addEventListener("click", function (e) {
    this.classList.toggle("to-hide");
    if (this.classList.contains("to-hide")) {
      showHideText.innerHTML = "Свернуть";
      showHideBlock.style.display = "block";
    } else {
      showHideText.innerHTML = "Подробнее о преподавателе";
      showHideBlock.style.display = "none";
    }
  });
}

if (points.length != 0) {
  var current = 0;
  let timeId = setInterval(function () {
    points[current].classList.remove("_active");
    text[current].classList.remove("_active");
    images[current].classList.remove("_active");
    current++;
    if (current >= points.length) current = 0;
    points[current].classList.add("_active");
    text[current].classList.add("_active");
    images[current].classList.add("_active");
  }, 2000);
}

for (let i = 0; i < readMore.length; i++) {
  readMore[i].addEventListener("click", function (e) {
    mainText[i].classList.toggle("more");
    if (readMore[i].innerHTML === "Читать целиком") {
      readMore[i].innerHTML = "Скрыть";
    } else {
      readMore[i].innerHTML = "Читать целиком";
    }
  });
}

if ($(".radial-progress")) {
  $(".radial-progress").each(function (index, value) {
    $(this).find($("circle.complete")).removeAttr("style");
  });

  $(window)
    .scroll(function () {
      $(".radial-progress").each(function (index, value) {
        if (
          $(window).scrollTop() >
            $(this).offset().top - $(window).height() * 0.75 &&
          $(window).scrollTop() <
            $(this).offset().top + $(this).height() - $(window).height() * 0.25
        ) {
          percent = $(value).data("percentage");
          radius = $(this).find($("circle.complete")).attr("r");
          circumference = 2 * Math.PI * radius;
          strokeDashOffset = circumference - (percent * circumference) / 100;
          $(this)
            .find($("circle.complete"))
            .animate({ "stroke-dashoffset": strokeDashOffset }, 1250);
        }
      });
    })
    .trigger("scroll");
}

// tippy

tippy("#tippy-point-1", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
});
tippy("#tippy-point-2", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
});
tippy("#tippy-point-3", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
});
tippy("#tippy-point-4", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
});
tippy("#tippy-point-5", {
  content:
    "Родилась идея создания сервиса, который помогает достигать карьерной цели",
});
