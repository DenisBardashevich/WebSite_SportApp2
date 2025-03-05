// Burger

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav");
  const navLinks = document.querySelectorAll(".nav__link");

  burger.addEventListener("click", (e) => {
    e.stopPropagation();
    nav.classList.toggle("nav--active");
    burger.classList.toggle("burger--active");
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target)) {
      nav.classList.remove("nav--active");
      burger.classList.remove("burger--active");
    }
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav--active");
      burger.classList.remove("burger--active");
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  if (slider && prevButton && nextButton) {
    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let autoSlideInterval;

    // Определяем количество видимых слайдов в зависимости от ширины экрана
    function getVisibleSlides() {
      return window.innerWidth <= 768 ? 1 : 2;
    }

    // Функция для показа слайда
    function showSlide(index) {
      const visibleSlides = getVisibleSlides(); // Количество видимых слайдов
      const offset = -index * (100 / visibleSlides); // Расчёт смещения
      slider.style.transform = `translateX(${offset}%)`;
    }

    // Функция для перехода к следующему слайду
    function nextSlide() {
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.ceil(totalSlides / visibleSlides) - 1;
      currentIndex = (currentIndex + 1) % (maxIndex + 1);
      showSlide(currentIndex);
    }

    // Функция для перехода к предыдущему слайду
    function prevSlide() {
      const visibleSlides = getVisibleSlides();
      const maxIndex = Math.ceil(totalSlides / visibleSlides) - 1;
      currentIndex = (currentIndex - 1 + (maxIndex + 1)) % (maxIndex + 1);
      showSlide(currentIndex);
    }

    // Автоматическое перелистывание
    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000); // Перелистывание каждые 5 секунд
    }

    // Остановка автоматического перелистывания
    function stopAutoSlide() {
      clearInterval(autoSlideInterval);
    }

    // Запуск автоматического перелистывания
    startAutoSlide();

    // Остановка автоматического перелистывания при наведении на слайдер
    slider.addEventListener('mouseenter', stopAutoSlide);
    slider.addEventListener('mouseleave', startAutoSlide);

    // Назначение обработчиков на кнопки
    prevButton.addEventListener('click', () => {
      prevSlide();
      stopAutoSlide(); // Останавливаем автослайд при ручном переключении
      startAutoSlide(); // Перезапускаем автослайд через 5 секунд
    });

    nextButton.addEventListener('click', () => {
      nextSlide();
      stopAutoSlide(); // Останавливаем автослайд при ручном переключении
      startAutoSlide(); // Перезапускаем автослайд через 5 секунд
    });

    // Обновляем слайдер при изменении размера экрана
    window.addEventListener('resize', () => {
      showSlide(currentIndex);
    });
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // Находим все кнопки "Read More"
  const readMoreBtns = document.querySelectorAll(".read-more-btn");
  // Находим все модальные окна
  const modalOverlays = document.querySelectorAll(".modal-overlay");
  // Находим все кнопки закрытия
  const closeModalBtns = document.querySelectorAll(".close-modal-btn");

  // Открытие модального окна
  readMoreBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modalId = btn.getAttribute("data-modal"); // Получаем id модального окна
      const modal = document.getElementById(modalId); // Находим модальное окно
      if (modal) {
        modal.style.display = "flex"; // Показываем модальное окно
      }
    });
  });

  // Закрытие модального окна
  closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const modal = btn.closest(".modal-overlay"); // Находим ближайшее модальное окно
      if (modal) {
        modal.style.display = "none"; // Скрываем модальное окно
      }
    });
  });

  // Закрытие модального окна при клике вне его
  modalOverlays.forEach((modal) => {
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.style.display = "none"; // Скрываем модальное окно
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    question.addEventListener("click", function () {
      // Закрываем все открытые вопросы
      faqItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove("active");
        }
      });

      // Открываем/закрываем текущий вопрос
      item.classList.toggle("active");
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.about-tabs__button');
  const tabContents = document.querySelectorAll('.about-tabs__tab');

  if (tabs.length > 0 && tabContents.length > 0) {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Убираем активный класс у всех табов и контента
        tabs.forEach((t) => t.classList.remove('active'));
        tabContents.forEach((content) => content.classList.remove('active'));

        // Добавляем активный класс к выбранному табу и контенту
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
      });
    });
  }
});