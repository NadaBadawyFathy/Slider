// Get Slider Items | Array.form [ES6 Feature]
let sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// Get Number Of Slides
let slidesCount = sliderImages.length;

// Set Current Slide
let currentSlide = 1;

// Slide Number Element
let slideNumberElement = document.getElementById('slide-number');

// Previous and Next Buttons
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// Handle Click on Previous and Next Buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// Create The Main UL Element
let paginationElement = document.createElement('ul');

// Set ID On Created Ul Element
paginationElement.setAttribute('id', 'pagination-ul');

// Create List Items Based On Slides Count
for (let i = 1; i <= slidesCount; i++) {

// Create The LI
let paginationItem = document.createElement('li');

// Set Custom Attribute
paginationItem.setAttribute('data-index', i);

// Set Item Content
paginationItem.appendChild(document.createTextNode(i));

// Append Items to The Main Ul List
paginationElement.appendChild(paginationItem);

}

// Add The Created UL Element to The Page
document.getElementById('indicators').appendChild(paginationElement);

// Get the new ul
let paginationCreatedUl = document.getElementById('pagination-ul');

// Get pagination Items | Array.form [ES6 Feature]
let paginationBullets = Array.from(document.querySelectorAll('#pagination-ul li'));

// Loop through All bullets items

for (let index = 0; index < paginationBullets.length; index++) {

  paginationBullets[index].onclick = function (params) {

    currentSlide = +(this.getAttribute('data-index')); //  this = paginationBullets[index]
    
    theCkecher();
  }
  
}

// Trigger the ckecker func
theCkecher();

// Next slide func
function nextSlide() {

  if (!nextButton.classList.contains('disabled')){
    currentSlide++;
    theCkecher();
  }
}

// Prev slide func
function prevSlide() {
  if (!prevButton.classList.contains('disabled')){
    currentSlide--;
    theCkecher();
  }
}

// Create the ckecher function
function theCkecher() {
  slideNumberElement.textContent = 'Slide # ' + (currentSlide) + ' of ' + (slidesCount);

  // Remove All active classes from images and bullets
  removeAllActive();

  // Set active class on current slide
  sliderImages[currentSlide - 1].classList.add('active')

  // Set active class on current pagination item
  paginationCreatedUl.children[currentSlide - 1].classList.add('active');

  // Ckeck if current slide is the first
  if (currentSlide == 1) {
    // Add disabled class on previous button
    prevButton.classList.add('disabled');
  }else {
    // Remove disabled class on previous button
    prevButton.classList.remove('disabled');
  }

  // Ckeck if current slide is the last
  if (currentSlide == slidesCount) {
    // Add disabled class on next button
    nextButton.classList.add('disabled');
  }else {
    // Remove disabled class on previous button
    nextButton.classList.remove('disabled');
  }

}

// Remove All active classes from images and bullets

function removeAllActive() {

  // Loop through images
  sliderImages.forEach(function (img) {
    img.classList.remove('active');
  })


  // Loop through bullets
  paginationBullets.forEach(function (bul) {
    bul.classList.remove('active')
  })
}