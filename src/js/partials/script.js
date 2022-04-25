var readMore = document.querySelectorAll(".readMore");
var mainText = document.querySelectorAll(".item-body__text");
var points = document.querySelectorAll(".points-content__title");
var text = document.querySelectorAll(".points-content__text");
var images = document.querySelectorAll(".points-main__image");

var textarea = document.getElementById("message-to-send");

const showHideButton = document.querySelector(".button__hide-show");
const showHideText = document.querySelector(".text__hide-show");
const showHideBlock = document.querySelector(".b-hide-show");

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
