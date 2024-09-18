// JavaScript for Login Popup
const loginBtn = document.getElementById('loginBtn');
const loginPopup = document.getElementById('loginPopup');
const closeBtn = document.querySelector('.close');

loginBtn.addEventListener('click', () => {
    loginPopup.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    loginPopup.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target == loginPopup) {
        loginPopup.style.display = 'none';
    }
    //java script for search bar
});
function filterProperties() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let cards = document.getElementById('propertyCards').getElementsByClassName('property-card');
    
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let title = card.getElementsByTagName('h3')[0].textContent.toLowerCase();
        
        if (title.includes(input)) {
            card.style.display = ''; // Show matching properties
        } else {
            card.style.display = 'none'; // Hide non-matching properties
        }
    }
}
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
