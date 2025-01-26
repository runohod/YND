// matchMedia

const supportContainer = document.querySelector(".support__container");
const participantsList = document.querySelector(".participants__list");
const participantsBtnLeft = document.querySelector(".participants__btn-left");
const participantsBtnRight = document.querySelector(".participants__btn-right");
const participantsItemFirst = document.querySelector(
  ".participants__item-first"
);
const participantsSelectorsNumberFirst = document.querySelector(
  ".participants__selectors-number-first"
);
const participantsSelectorsNumberSecond = document.querySelector(
  ".participants__selectors-numbers-second"
);

if (matchMedia) {
  let screenSupport = window.matchMedia("(max-width:576px)");
  screenSupport.addListener(changesMaxWidth576px);
  changesMaxWidth576px(screenSupport);
}

function changesMaxWidth576px(screenSupport) {
  if (screenSupport.matches) {
    supportContainer.innerHTML = `
    <div class="support__top flex">
              <h3 class="support__title margin-reset">
                Чтобы поддержать Международный васюкинский турнир
              </h3>
              <img class="support__top-img" src="img/support-img-head.png" aria-hidden="true">
              <h3 class="support__title support__title-bottom margin-reset">
                посетите лекцию на&nbsp;тему:
                <span class="support__title_accent">&laquo;Плодотворная дебютная идея&raquo;</span>
              </h3>
            </div>
            <div class="support__bottom flex">
              <div class="support__bottom-content">
                <div class="support__descr">
                  <h3 class="support__title support__bottom-title margin-reset">и&nbsp;Сеанс <span
                      class="support__title_accent">одновременной игры
                      в&nbsp;шахматы на&nbsp;160 досках</span> гроссмейстера О.&nbsp;Бендера</h3>
                </div>
                <ul class="support__list list-reset">
                  <li class="support__item flex">
                    <span class="support__item-caption">Место проведения:</span>
                    <span class="support__item-value">Клуб &laquo;Картонажник&raquo;</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Дата и&nbsp;время мероприятия:</span>
                    <span class="support__item-value">22&nbsp;июня 1927&nbsp;г.&nbsp;в&nbsp;18:00</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Стоимость входных билетов:</span>
                    <span class="support__item-value">20&nbsp;коп.</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Плата за&nbsp;игру:</span>
                    <span class="support__item-value">50&nbsp;коп.</span>
                  </li>
                  <li class="support__item flex">
                    <span class="support__item-caption">Взнос на&nbsp;телеграммы:</span>
                    <span class="support__item-value"><span class="support__item_crossout">100&nbsp;руб.</span>
                      21&nbsp;руб.&nbsp;16&nbsp;коп.</span>
                  </li>
                  <li class="support__question">По&nbsp;всем вопросам обращаться в&nbsp;администрацию
                    к&nbsp;К.&nbsp;Михельсону
                  </li>
                </ul>
              </div>
            </div>
    `;
  } else {
    supportContainer.innerHTML = `
    <div class="support__top flex">
          <h3 class="support__title margin-reset">
            Чтобы поддержать Международный васюкинский турнир посетите лекцию на&nbsp;тему:
            <span class="support__title_accent">&laquo;Плодотворная дебютная идея&raquo;</span>
          </h3>
          <img class="support__top-img" src="img/support-img-head.png" aria-hidden="true">
        </div>
        <div class="support__bottom flex">
          <div class="support__bottom-content">
            <div class="support__descr">
              <h3 class="support__title support__bottom-title margin-reset">и&nbsp;Сеанс <span
                  class="support__title_accent">одновременной игры
                  в&nbsp;шахматы на&nbsp;160 досках</span> гроссмейстера О.&nbsp;Бендера</h3>
            </div>
            <ul class="support__list list-reset">
              <li class="support__item">
                <span class="support__item-caption">Место проведения:</span>
                <span class="support__item-value">Клуб &laquo;Картонажник&raquo;</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Дата и&nbsp;время мероприятия:</span>
                <span class="support__item-value">22&nbsp;июня 1927&nbsp;г.&nbsp;в&nbsp;18:00</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Стоимость входных билетов:</span>
                <span class="support__item-value">20&nbsp;коп.</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Плата за&nbsp;игру:</span>
                <span class="support__item-value">50&nbsp;коп.</span>
              </li>
              <li class="support__item">
                <span class="support__item-caption">Взнос на&nbsp;телеграммы:</span>
                <span class="support__item-value"><span class="support__item_crossout">100&nbsp;руб.</span>
                  21&nbsp;руб.&nbsp;16&nbsp;коп.</span>
              </li>
              <li class="support__question">По&nbsp;всем вопросам обращаться в&nbsp;администрацию
                к&nbsp;К.&nbsp;Михельсону
              </li>
            </ul>
          </div>
        </div>
        `;
  }
}

if (matchMedia) {
  let screenParticipantsSlider = window.matchMedia("(min-width: 769px)");
  screenParticipantsSlider.addListener(changesMinWidth768px);
  changesMinWidth768px(screenParticipantsSlider);
}

function changesMinWidth768px(screenParticipantsSlider) {
  if (screenParticipantsSlider.matches) {
    function participantsRightSlider() {
      participantsItemFirst.style.marginLeft = "-100%";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 0.6");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
    }
    function participantsLeftSlider() {
      participantsItemFirst.style.marginLeft = "0";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    }

    setInterval(participantsRightSlider, 4000);
    setInterval(participantsLeftSlider, 8000);

    participantsBtnRight.addEventListener("click", function (e) {
      participantsItemFirst.style.marginLeft = "-100%";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 0.6");

      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
    });
    participantsBtnLeft.addEventListener("click", function (e) {
      participantsItemFirst.style.marginLeft = "0";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");

      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    });
  } else {
    function participantsRightSliderItem1() {
      participantsItemFirst.style.marginLeft = "calc(-100% - var(--gap))";
      participantsSelectorsNumberFirst.innerHTML = "2";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    }
    function participantsRightSliderItem2() {
      participantsItemFirst.style.marginLeft = "calc(-200% - (var(--gap) * 2))";
      participantsSelectorsNumberFirst.innerHTML = "3";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    }
    function participantsRightSliderItem3() {
      participantsItemFirst.style.marginLeft = "calc(-300% - (var(--gap) * 3))";
      participantsSelectorsNumberFirst.innerHTML = "4";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    }
    function participantsRightSliderItem4() {
      participantsItemFirst.style.marginLeft = "calc(-400% - (var(--gap) * 4))";
      participantsSelectorsNumberFirst.innerHTML = "5";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    }
    function participantsRightSliderItem5() {
      participantsItemFirst.style.marginLeft = "calc(-500% - (var(--gap) * 5))";
      participantsSelectorsNumberFirst.innerHTML = "6";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
    }
    function participantsLeftSlider() {
      participantsItemFirst.style.marginLeft = "0";
      participantsSelectorsNumberFirst.innerHTML = "1";
      participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
      participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
    }
    function participantsSliderItems() {
      setTimeout(participantsRightSliderItem1, 4000);
      setTimeout(participantsRightSliderItem2, 8000);
      setTimeout(participantsRightSliderItem3, 12000);
      setTimeout(participantsRightSliderItem4, 16000);
      setTimeout(participantsRightSliderItem5, 20000);
      setTimeout(participantsLeftSlider, 24000);
    }

    window.addEventListener("load", function (e) {
      participantsItemFirst.style.marginLeft = "0px";
      participantsSelectorsNumberFirst.innerHTML = "1";
    });

    participantsSliderItems();
    setInterval(participantsSliderItems, 25000);

    participantsBtnRight.addEventListener("click", function (e) {
      if (participantsItemFirst.style.marginLeft === "0px") {
        participantsItemFirst.style.marginLeft = "calc(-100% - var(--gap))";
        participantsSelectorsNumberFirst.innerHTML = "2";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft === "calc(-100% - var(--gap))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-200% - (var(--gap) * 2))";
        participantsSelectorsNumberFirst.innerHTML = "3";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-200% - (var(--gap) * 2))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-300% - (var(--gap) * 3))";
        participantsSelectorsNumberFirst.innerHTML = "4";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-300% - (var(--gap) * 3))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-400% - (var(--gap) * 4))";
        participantsSelectorsNumberFirst.innerHTML = "5";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-400% - (var(--gap) * 4))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-500% - (var(--gap) * 5))";
        participantsSelectorsNumberFirst.innerHTML = "6";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-500% - (var(--gap) * 5))"
      ) {
        participantsItemFirst.style.marginLeft = "0px";
        participantsSelectorsNumberFirst.innerHTML = "1";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      }
    });
    participantsBtnLeft.addEventListener("click", function (e) {
      if (participantsItemFirst.style.marginLeft === "0px") {
        participantsItemFirst.style.marginLeft =
          "calc(-500% - (var(--gap) * 5))";
        participantsSelectorsNumberFirst.innerHTML = "6";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
      } else if (
        participantsItemFirst.style.marginLeft === "calc(-100% - var(--gap))"
      ) {
        participantsItemFirst.style.marginLeft = "0px";
        participantsSelectorsNumberFirst.innerHTML = "1";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-200% - (var(--gap) * 2))"
      ) {
        participantsItemFirst.style.marginLeft = "calc(-100% - var(--gap))";
        participantsSelectorsNumberFirst.innerHTML = "2";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-300% - (var(--gap) * 3))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-200% - (var(--gap) * 2))";
        participantsSelectorsNumberFirst.innerHTML = "3";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 0.6");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-400% - (var(--gap) * 4))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-300% - (var(--gap) * 3))";
        participantsSelectorsNumberFirst.innerHTML = "4";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
      } else if (
        participantsItemFirst.style.marginLeft ===
        "calc(-500% - (var(--gap) * 5))"
      ) {
        participantsItemFirst.style.marginLeft =
          "calc(-400% - (var(--gap) * 4))";
        participantsSelectorsNumberFirst.innerHTML = "5";
        participantsSelectorsNumberFirst.setAttribute("style", "opacity: 1");
        participantsSelectorsNumberSecond.setAttribute("style", "opacity: 1");
      }
    });
  }
}

// Функционал кнопок для слайдера с классом .transform__list

const transformList = document.querySelector(".transform__list");
const transformBtnRight = document.querySelector(
  ".transform__toolbar-item-right"
);
const transformBtnLeft = document.querySelector(
  ".transform__toolbar-item-left"
);
const transformCircles = document.querySelectorAll(".transform__circle");
const transformCircle1 = document.querySelector(
  ".transform__toolbar-item-circle-1"
);
const transformCircle2 = document.querySelector(
  ".transform__toolbar-item-circle-2"
);
const transformCircle3 = document.querySelector(
  ".transform__toolbar-item-circle-3"
);
const transformCircle4 = document.querySelector(
  ".transform__toolbar-item-circle-4"
);
const transformCircle5 = document.querySelector(
  ".transform__toolbar-item-circle-5"
);

window.addEventListener("load", function (e) {
  transformCircle1.style.backgroundColor = "#313131";
  transformBtnLeft.style.backgroundColor = "rgba(49, 49, 49, 0.2)";
});

transformList.addEventListener("scroll", function (e) {
  if (transformList.scrollLeft === 0) {
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
    });
    transformCircle1.style.backgroundColor = "#313131";
    transformBtnLeft.style.backgroundColor = "rgba(49, 49, 49, 0.2)";
  }

  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 20) {
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[1].style.backgroundColor = "#313131";
    });
    transformBtnLeft.style.backgroundColor = "#313131";
  }
  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 40) {
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[2].style.backgroundColor = "#313131";
    });
  }
  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 60) {
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[3].style.backgroundColor = "#313131";
    });
    transformBtnRight.style.backgroundColor = "#313131";
  }
  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 80) {
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[4].style.backgroundColor = "#313131";
    });
    transformBtnRight.style.backgroundColor = "rgba(49, 49, 49, 0.2)";
  }
});

transformCircles.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (element != transformCircle1) {
      transformBtnLeft.style.backgroundColor = "#313131";
    }
  });
});

transformCircles.forEach((element) => {
  element.addEventListener("click", function (e) {
    if (element != transformCircle5) {
      transformBtnRight.style.backgroundColor = "#313131";
    }
  });
});

transformCircle1.addEventListener("click", function (e) {
  transformList.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});

transformCircle2.addEventListener("click", function (e) {
  transformList.scrollTo({
    top: 0,
    left: (transformList.scrollWidth / 100) * 20 + (20 / 100) * 20,
    behavior: "smooth",
  });
});

transformCircle3.addEventListener("click", function (e) {
  transformList.scrollTo({
    top: 0,
    left: (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40,
    behavior: "smooth",
  });
});

transformCircle4.addEventListener("click", function (e) {
  transformList.scrollTo({
    top: 0,
    left: (transformList.scrollWidth / 100) * 60 + (20 / 100) * 60,
    behavior: "smooth",
  });
});

transformCircle5.addEventListener("click", function (e) {
  transformList.scrollTo({
    top: 0,
    left: (transformList.scrollWidth / 100) * 80 + (20 / 100) * 80,
    behavior: "smooth",
  });
  transformBtnRight.style.backgroundColor = "rgba(49, 49, 49, 0.2)";
});

transformBtnRight.addEventListener("click", function (e) {
  if (
    transformList.scrollLeft <
    (transformList.scrollWidth / 100) * 20 + (20 / 100) * 20
  ) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 20 + (20 / 100) * 20,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[1].style.backgroundColor = "#313131";
    });
    transformBtnLeft.style.backgroundColor = "#313131";
  }
  if (
    transformList.scrollLeft >=
      (transformList.scrollWidth / 100) * 20 + (20 / 100) * 20 &&
    transformList.scrollLeft <
      (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40
  ) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[2].style.backgroundColor = "#313131";
    });
  }
  if (
    transformList.scrollLeft >=
      (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40 &&
    transformList.scrollLeft <
      (transformList.scrollWidth / 100) * 60 + (20 / 100) * 60
  ) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 60 + (20 / 100) * 60,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[3].style.backgroundColor = "#313131";
    });
  }
  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 60) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 80 + (20 / 100) * 80,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[4].style.backgroundColor = "#313131";
    });
    transformBtnRight.style.backgroundColor = "rgba(49, 49, 49, 0.2)";
  }
});

transformBtnLeft.addEventListener("click", function (e) {
  if (
    transformList.scrollLeft >=
      (transformList.scrollWidth / 100) * 20 + (20 / 100) * 20 &&
    transformList.scrollLeft <
      (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40
  ) {
    transformList.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[0].style.backgroundColor = "#313131";
    });
  }
  if (
    transformList.scrollLeft >=
      (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40 &&
    transformList.scrollLeft <
      (transformList.scrollWidth / 100) * 60 + (20 / 100) * 60
  ) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 20 + (20 / 100) * 20,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[1].style.backgroundColor = "#313131";
    });
  }
  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 60) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 40 + (20 / 100) * 40,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[2].style.backgroundColor = "#313131";
    });
  }
  if (transformList.scrollLeft > (transformList.scrollWidth / 100) * 80) {
    transformList.scrollTo({
      top: 0,
      left: (transformList.scrollWidth / 100) * 60 + (20 / 100) * 60,
      behavior: "smooth",
    });
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
      transformCircles[3].style.backgroundColor = "#313131";
    });
    transformBtnRight.style.backgroundColor = "#313131";
  }
});

transformCircles.forEach((element) => {
  element.addEventListener("click", function (e) {
    transformCircles.forEach((element) => {
      element.style.backgroundColor = "#d9d9d9";
    });
    element.style.backgroundColor = "#313131";
  });
});
