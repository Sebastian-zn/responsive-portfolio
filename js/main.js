const nav_menu = document.getElementById('nav-menu'),
  nav_toggle = document.getElementById('nav-toggle'),
  nav_close = document.getElementById('nav-close');

// Validate if constant exists
if (nav_toggle) {
  nav_toggle.addEventListener('click', () => {
    nav_menu.classList.add('show-menu');
  });
}

if (nav_close) {
  nav_close.addEventListener('click', () => {
    nav_menu.classList.remove('show-menu');
  });
}

// Link action
const nav_link = document.querySelectorAll('.nav__link');

function linkAction() {
  nav_menu.classList.remove('show-menu');
}

nav_link.forEach(n => n.addEventListener('click', linkAction));

// Scroll Sections Active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scroll_y = window.pageYOffset;

  sections.forEach(current => {
    const section_height = current.offsetHeight;
    const section_top = current.offsetTop - 50;

    let section_id = current.getAttribute('id');

    if (scroll_y > section_top && scroll_y <= section_top + section_height) {
      document.querySelector('.nav__menu a[href*=' + section_id + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + section_id + ']').classList.remove('active-link');
    }
  });
}

window.addEventListener('scroll', scrollActive);

function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// Accordion Skills
const skills_content = document.getElementsByClassName('skills__content'),
  skills_header = document.querySelectorAll('.skills__header');

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (let i = 0; i < skills_content.length; i++) {
    skills_content[i].className = 'skills__content skills__close';
  }

  if (itemClass === 'skills__content skills__close') {
    this.parentNode.className = 'skills__content skills__open';
  }
}

skills_header.forEach((element) => {
  element.addEventListener('click', toggleSkills);
});

// Qualification Tabs
const tabs = document.querySelectorAll('[data-target]'),
  tab_contents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);

    tab_contents.forEach(tab_content => {
      tab_content.classList.remove('qualification__active');
    });
    target.classList.add('qualification__active');

    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });
    tab.classList.add('qualification__active');
  });
});

// Services Modal
const modal_views = document.querySelectorAll('.services__modal'),
  modal_buttons = document.querySelectorAll('.services__button'),
  modal_closes = document.querySelectorAll('.services__modal-close');

let modal = function (modal_click) {
  modal_views[modal_click].classList.add('active-modal');
}

modal_buttons.forEach((modal_btn, i) => {
  modal_btn.addEventListener('click', () => {
    modal(i);
  });
});

modal_closes.forEach((modal_close) => {
  modal_close.addEventListener('click', () => {
    modal_views.forEach((modal_view) => {
      modal_view.classList.remove('active-modal');
    });
  });
});

// Swiper Pagination
let swiperPagination = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper Testimonial
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    }
  }
});
