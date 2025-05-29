
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let searchForm = document.querySelector('#search-form');
let closeBtn = document.querySelector('#close');

menu.onclick = () => {
  menu.classList.toggle('fa-times'); // Toggle icon
  navbar.classList.toggle('active'); // Toggle navbar visibility
};

let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header .navbar a')


window.onscroll = () => {
  menu.classList.remove('fa-times'); // Reset icon
  navbar.classList.remove('active'); // Reset navbar visibility

  section.forEach(sec => {

    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navlinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header, .navbar a[href*=' + id + ']').classList.add('active')
      })
    }
  });
};

document.querySelector('#search-icon').onclick = () => {
  searchForm.classList.toggle('active'); // Show/hide search form
}

closeBtn.onclick = () => {
  searchForm.classList.remove('active'); // Hide search form
}

var swiper = new Swiper(".swiper-container", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

