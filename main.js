const searchBtn = document.querySelector("nav .search-btn");
const canselBtn = document.querySelector("nav .cansel-btn");
const searchBox = document.querySelector("nav .search-box");
const searchInput = document.querySelector("nav .search-box input");

searchBtn.onclick = () => {
  searchBox.classList.add("active");
  searchInput.classList.add("active");
  searchBtn.classList.add("active");
  canselBtn.classList.add("active");
};

canselBtn.onclick = () => {
  searchBox.classList.remove("active");
  searchInput.classList.remove("active");
  searchBtn.classList.remove("active");
  canselBtn.classList.remove("active");
};

$("#menu-btn").click(function () {
  $("nav .navigation ul").addClass("active");
});

$("#menu-close").click(function () {
  $("nav .navigation ul").removeClass("active");
});

var swiper = new Swiper(".course_slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".expert_slider", {
  spaceBetween: 20,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    540: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
