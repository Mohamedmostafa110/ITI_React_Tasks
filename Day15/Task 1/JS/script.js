const searchInput = document.getElementById("searchInput");
const mealsContainer = document.getElementById("mealsContainer");
const historyContainer = document.getElementById("history");

function getSavedSearches() {
  return JSON.parse(localStorage.getItem("searches")) || [];
}

function saveSearch(word) {
  let searches = getSavedSearches();

  searches.push(word);

  localStorage.setItem("searches", JSON.stringify(searches));

  displayHistory();
}

function displayHistory() {
  let history = getSavedSearches();

  historyContainer.innerHTML = "";

  history.forEach(function (item) {
    historyContainer.innerHTML += `
            <div class="col-md-3">
                <div class="card">
                    <div class="card-body text-center">
                        ${item}
                    </div>
                </div>
            </div>
        `;
  });
}

async function getMeals(mealName) {
  let response = await fetch(
    `https://forkify-api.herokuapp.com/api/search?q=${mealName}`,
  );

  let data = await response.json();

  displayMeals(data.recipes);

  saveSearch(mealName);
}

function displayMeals(meals) {
  mealsContainer.innerHTML = "";

  meals.forEach(function (meal) {
    mealsContainer.innerHTML += `
            <div class="col-md-4">
                <div class="card h-100 shadow">

                    ${meal.image_url}

                    <div class="card-body">
                        <h5 class="card-title">
                            ${meal.title}
                        </h5>

                        <p class="card-text">
                            ${meal.publisher}
                        </p>

                        ${meal.source_url}
                            View Recipe
                        </a>
                    </div>

                </div>
            </div>
        `;
  });
}

function searchMeals() {
  let mealName = searchInput.value.trim();

  getMeals(mealName);
}

displayHistory();
