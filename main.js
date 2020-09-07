var radioBtns = document.querySelectorAll('.radio-button');
var letsCookBtn = document.querySelector('.cook-button');
var clearBtn = document.querySelector('.clear-button');
var resultPage = document.querySelector('.result-container');
var cookPotImg = document.querySelector('.cooking-pot');
var prompt = document.querySelector('.prompt')

letsCookBtn.addEventListener('click', populateMeal);

function getRandomDishes(str) {
  var randomIndex = getRandomIndex(meals[str]);
  var randomDish = meals[str][randomIndex];

  resultPage.outerHTML =
  `<div class="result-container">
    <h3>You should make:</h3>
    <p class="selected-dish">${randomDish}</p>
  </div>`

  showResult();
};

function getSelectedInput() {
  var selected;
  radioBtns.forEach(function(btn) {
    if (btn.checked) {
      selected = btn.value
    }
  })
  return selected
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};

function showResult() {
  cookPotImg.classList.add('hidden')
  clearBtn.classList.remove('hidden')
  resultPage.classList.remove('hidden')
};

function getEntireMeal() {
  var sidesIndex = getRandomIndex(meals.sides)
  var entreesIndex = getRandomIndex(meals.entrees)
  var dessertsIndex = getRandomIndex(meals.desserts)

  var sides = meals.sides[sidesIndex]
  var entrees = meals.entrees[entreesIndex]
  var desserts = meals.desserts[dessertsIndex]

  resultPage.outerHTML =
  `<div class="entire-meal">
      <h3>You should make:</h3>
      <p class="full-course"> ${entrees} with a side of ${sides} and ${desserts} for dessert!</p>
  </div>`

  showResult();
};

function populateMeal() {
  var checked = getSelectedInput();
  if (checked === 'meals') {
    getEntireMeal();
  } else {
    getRandomDishes(checked)
  }
};
