var radioBtns = document.querySelectorAll('.radio-button');
var letsCookBtn = document.querySelector('.cook-button');
var resultPage = document.querySelector('.result-container');
var cookPotImg = document.querySelector('.cooking-pot');
var clearBtn = document.querySelector('.clear-button');
var recipeBtn = document.querySelector('.add-recipe-button');
var form = document.querySelector('.form-view');
var userRecipeType = document.querySelector('#recipe-type');
var userRecipeName = document.querySelector('#recipe-name');
var addNewBtn = document.querySelector('.add-new-button');

letsCookBtn.addEventListener('click', populateMeal);
clearBtn.addEventListener('click', clearPage);
recipeBtn.addEventListener('click', showForm);
addNewBtn.addEventListener('click', addNewUserRecipe);


function getSelectedInput() {
  var selected;
  radioBtns.forEach(function(btn) {
    if (btn.checked) {
      selected = btn.value
    }
  })
  return selected
};

function getRandomDishes(str) {
  var randomIndex = getRandomIndex(meals[str]);
  var randomDish = meals[str][randomIndex];

  resultPage.outerHTML =
  `<div class="result-container">
    <h3 class="prompt">You should make:</h3>
    <p class="selected-dish">${randomDish}</p>
  </div>`

  showResult();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length)
};

function showResult() {
  cookPotImg.classList.add('hidden')
  clearBtn.classList.remove('hidden')
  resultPage.classList.remove('hidden')
};

function populateMeal() {
  var checked = getSelectedInput();
  if (checked === 'meals') {
    getEntireMeal();
  } else {
    getRandomDishes(checked)
  }
};

function getEntireMeal() {
  var sidesIndex = getRandomIndex(meals.sides);
  var entreesIndex = getRandomIndex(meals.entrees);
  var dessertsIndex = getRandomIndex(meals.desserts);

  var sides = meals.sides[sidesIndex];
  var entrees = meals.entrees[entreesIndex];
  var desserts = meals.desserts[dessertsIndex];

  resultPage.outerHTML =
  `<div class="entire-meal">
      <h3 class="prompt">You should make:</h3>
      <p class="full-course"> ${entrees} with a side of ${sides} and ${desserts} for dessert!</p>
  </div>`

  showResult();
};

function clearPage() {
  var header = document.querySelector('.prompt');
  var fullCourse = document.querySelector('.full-course');
  var selectedDish = document.querySelector('.selected-dish');

  if(selectedDish === null || undefined) {
    fullCourse.remove();
  } else {
    selectedDish.remove();
  }

  header.remove();
  cookPotImg.classList.remove('hidden')
  clearBtn.classList.add('hidden')
};

function showForm() {
  form.classList.remove('hidden')
};

function addNewUserRecipe() {
  var type = userRecipeType.value;
  var recipeName = userRecipeName.value;
  type = type.toLowerCase()

  if (type === 'side') {
    sides.push(recipeName)
  } else if (type === 'main dish') {
    entrees.push(recipeName)
  } else if (type === 'dessert') {
    desserts.push(recipeName)
  } else if (userRecipeName) {
    alert("Please input recipe type: side, main dish, or dessert.")
  }
};
