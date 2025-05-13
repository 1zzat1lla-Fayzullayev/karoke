document.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 10) {
    nav.classList.add("scroll_blur");
  } else {
    nav.classList.remove("scroll_blur");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question-block");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const parent = this.parentElement;
      parent.classList.toggle("active");

      questions.forEach((q) => {
        if (q !== this && q.parentElement.classList.contains("active")) {
          q.parentElement.classList.remove("active");
        }
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  
  scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.style.opacity = '1';
      scrollToTopBtn.style.visibility = 'visible';
    } else {
      scrollToTopBtn.style.opacity = '0';
      scrollToTopBtn.style.visibility = 'hidden';
    }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile_menu');
  const closeBtn = document.querySelector('.mobile_close');

  if (!burger || !mobileMenu) return;

  burger.addEventListener('click', function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle('active');
  });

  document.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });

  mobileMenu.addEventListener('click', function (e) {
    e.stopPropagation();
  });

  closeBtn?.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
  });
});
