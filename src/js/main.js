document.addEventListener("DOMContentLoaded", () => {
  //   Методы для блока tournament-participants
  const participantsList = document.querySelector(
    ".tournament-participants__list"
  );
  const participants = document.querySelectorAll(".participants__item");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const navText = document.querySelector(".tournament-participants__nav-text");

  let index = 0;
  const totalItems = participants.length;
  let visibleItems = 3;

  const calculateMoveSize = () => {
    const itemStyle = getComputedStyle(participants[0]);
    const itemWidth = participants[0].offsetWidth;
    const marginRight = parseInt(itemStyle.marginRight);
    const marginLeft = parseInt(itemStyle.marginLeft);
    return itemWidth + marginRight + marginLeft;
  };

  let moveSize = calculateMoveSize(); // Including margin

  const updateCarousel = () => {
    participantsList.style.transform = `translateX(-${index * moveSize}px)`;
    navText.textContent = `${index + 1} / ${totalItems}`;
  };

  const moveNext = () => {
    if (index < totalItems - visibleItems) {
      index++;
    } else {
      index = 0;
    }
    updateCarousel();
  };

  const movePrev = () => {
    if (index > 0) {
      index--;
    } else {
      index = totalItems - visibleItems;
    }
    updateCarousel();
  };

  nextButton.addEventListener("click", moveNext);
  prevButton.addEventListener("click", movePrev);

  let autoSlideInterval = setInterval(moveNext, 4000);

  const handleResize = () => {
    if (window.innerWidth <= 375) {
      visibleItems = 1;
    } else {
      visibleItems = 3;
    }
    moveSize = calculateMoveSize();
    updateCarousel();
  };

  window.addEventListener("resize", handleResize);
  handleResize();

  //   Методы для блока lecture ---------------------
  const lectureWrap = document.querySelector(".lecture__wrap");
  const tableWrapperContent = document.querySelector(".table-wrapper");
  const sliderContainer = document.querySelector(".slider-container");

  function getMobileTemplate() {
    return `
        <div class="lecture__content">
          <h2 class="lecture__title">Чтобы поддержать Международный Васюкинский Турнир</h2>
          <div class="lecture__image-wrapper">
            <img class="lecture__image" src="/public/images/many_chees.png" alt="Много шахматных фигур">
          </div>
          <h3 class="lecture__title-subtitle">посетите лекцию на тему:</h3>
          <h3 class="lecture__subtitle">«Плодотворная дебютная идея»</h3>
        </div>
      `;
  }

  function getMobileTable() {
    return `
        <div class="lecture__column-left ">
                  <div class="lecture__event-row">
                    <div class="lecture__wrapper-row">
                      <p class="lecture__event-cell--header">Место проведения:</p>
                      <p class="lecture__event-cell--title">Клуб «Карточнажник»</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Дата и время мероприятия:</p>
                    <p class="lecture__event-cell--title">22 июня 1927 г. в 18:00</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Стоимость входных билетов:</p>
                    <p class="lecture__event-cell--title">20 коп.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Плата за игру: <span class="lecture__event-cell--title">50 коп.</span></p>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="335" height="2" viewBox="0 0 335 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Взнос на телеграммы:</p>
                    <p class="lecture__event-cell--title"><s>100 руб.</s> 21 руб. 16 коп.</p>
                  </div>
        </div>
        `;
  }

  function getDesktopTemplate() {
    return `
        <div class="lecture__content">
          <h2 class="lecture__title">Чтобы поддержать Международный Васюкинский Турнир посетите лекцию на тему:</h2>
          <h3 class="lecture__subtitle">«Плодотворная дебютная идея»</h3>
        </div>
        <div class="lecture__image-wrapper">
          <img class="lecture__image" src="/public/images/many_chees.png" alt="Много шахматных фигур">
        </div>
      `;
  }

  function getDesctopTable() {
    return `
        <div class="lecture__column-left ">
                  <div class="lecture__event-row">
                    <div class="lecture__wrapper-row">
                      <p class="lecture__event-cell lecture__event-cell--header">Место проведения:</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Дата и время мероприятия:</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Стоимость входных билетов:</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Плата за игру:</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell lecture__event-cell--header">Взнос на телеграммы:</p>
                  </div>
                </div>
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="2" height="248" viewBox="0 0 2 248" fill="none">
                    <path d="M1 0V248" stroke="#D0D0D0" stroke-width="2" />
                  </svg>
                </div>
                <div class="lecture__column-rith ">
                  <div class="lecture__event-row">
                    <div class="lecture__wrapper-row">
                      <p class="lecture__event-cell">Клуб «Карточнажник»</p>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell">22 июня 1927 г. в 18:00</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell">20 коп.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell">50 коп.</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="352" height="2" viewBox="0 0 352 2" fill="none">
                      <path d="M0 1H704" stroke="#D0D0D0" stroke-width="2" />
                    </svg>
                  </div>
                  <div class="lecture__event-row">
                    <p class="lecture__event-cell"><s>100 руб.</s> 21 руб. 16 коп.</p>
                  </div>
                </div>
        `;
  }

  window.addEventListener("resize", function () {
    if (window.innerWidth <= 375) {
      lectureWrap.innerHTML = getMobileTemplate();
      tableWrapperContent.innerHTML = getMobileTable();
    } else {
      lectureWrap.innerHTML = getDesktopTemplate();
      tableWrapperContent.innerHTML = getDesctopTable();
    }
  });

  // ------------------------------------------------------------

  const slider = document.querySelector(".slider");
  const prevButtonSlider = document.querySelector(".prev-button");
  const nextButtonSlider = document.querySelector(".next-button");
  const slides = Array.from(slider.querySelectorAll("li"));
  const slideCount = slides.length;
  let slideIndex = 0;

  const indicatorsContainer = document.querySelector(".carousel__indicators");

  // Создание индикаторов
  function createIndicators() {
    indicatorsContainer.innerHTML = "";
    const maxIndicators = Math.min(slideCount, 5);
    for (let i = 0; i < maxIndicators; i++) {
      const indicator = document.createElement("div");
      indicator.classList.add("carousel__indicator");
      indicatorsContainer.appendChild(indicator);
    }
  }

  createIndicators();

  const indicators = Array.from(
    indicatorsContainer.querySelectorAll(".carousel__indicator")
  );

  // Обработчики событий для кнопок
  prevButtonSlider.addEventListener("click", showPreviousSlide);
  nextButtonSlider.addEventListener("click", showNextSlide);

  // Функция для показа предыдущего слайда
  function showPreviousSlide() {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    updateSlider();
  }

  // Функция для показа следующего слайда
  function showNextSlide() {
    slideIndex = (slideIndex + 1) % slideCount;
    updateSlider();
  }

  // Функция для обновления отображения слайдера
  function updateSlider() {
    slides.forEach((slide, index) => {
      slide.style.display = index === slideIndex ? "block" : "none";
    });
    updateIndicators();
  }

  // Функция для обновления активного индикатора
  function updateIndicators() {
    const maxIndicators = Math.min(slideCount, 5);
    let start = Math.max(
      0,
      Math.min(slideIndex - 2, slideCount - maxIndicators)
    );

    indicators.forEach((indicator, i) => {
      const indicatorIndex = (start + i) % slideCount;
      indicator.classList.toggle("active", indicatorIndex === slideIndex);
    });
  }

  // Инициализация слайдера
  if (window.innerWidth <= 375) {
    updateSlider();
  }

  window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  });
});
