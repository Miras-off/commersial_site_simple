
var objectCards = document.querySelectorAll('.obj-card');

function checkCards(entries) {
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];


    if (entry.isIntersecting) {
      entry.target.classList.add('visible');

      observer.unobserve(entry.target);
    }
  }
}

var observer = new IntersectionObserver(checkCards, { threshold: 0.15 });

for (var i = 0; i < objectCards.length; i++) {
  observer.observe(objectCards[i]);
}

var menuButton = document.querySelector('.menu-toggle');
var menuLinks = document.querySelector('.nav-links');

function toggleMenu() {
  var menuIsOpen = menuLinks.style.display === 'flex';

  if (menuIsOpen) {
    menuLinks.style.display = 'none';
  } else {
    menuLinks.style.display = 'flex';
    menuLinks.style.position = 'absolute';
    menuLinks.style.top = '64px';
    menuLinks.style.left = '0';
    menuLinks.style.right = '0';
    menuLinks.style.background = 'var(--paper)';
    menuLinks.style.flexDirection = 'column';
    menuLinks.style.padding = '20px 32px';
    menuLinks.style.borderBottom = '1px solid var(--line)';
    menuLinks.style.gap = '18px';
  }
}

menuButton.addEventListener('click', toggleMenu);

var leadForm = document.getElementById('leadForm');
var formMessage = document.getElementById('formMsg');

function handleFormSubmit(event) {
  event.preventDefault();

  formMessage.textContent = 'Заявка принята. Мы свяжемся с вами в ближайшее время.';
  leadForm.reset();
}

leadForm.addEventListener('submit', handleFormSubmit);

const phoneInput = document.getElementById("phone");

  Inputmask({
    mask: "+7 (999) 999-99-99",
    showMaskOnHover: false,
    clearIncomplete: true
  }).mask(phoneInput);