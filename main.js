var radioBtns = document.querySelectorAll('.radio-button');
var letsCookBtn = document.querySelector('.cook-button');
var clearBtn = document.querySelector('.clear-button');
var resultPage = document.querySelector('.result-container');
var cookPotImg = document.querySelector('.cooking-pot');

letsCookBtn.addEventListener('click', populateMeal);

function getRandomDishes(str) {
  var randomIndex = getRandomIndex(meals[str]);
  var randomDish = meals[str][randomIndex];
  resultPage.insertAdjacentHTML('beforeend', `<span class="selected-dish">${randomDish}</span>`)
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

  meals.sides[sidesIndex]
  meals.entrees[entreesIndex]
  meals.desserts[dessertsIndex]


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

//make a new function for addEventListener that contains the function getRandomDishes and getEntireMeal
//create a getEntireMeal function
  //need to access our sides, entrees, desserts array
  //need to randomize all three arrays together and create
//insertAdjacentHTML onto the result page and hide pot image
