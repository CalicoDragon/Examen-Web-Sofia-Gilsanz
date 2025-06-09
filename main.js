const searchBar = document.getElementById("searchBar");
const cocktailsContainer = document.getElementById("cocktailsContainer");

const searchCocktail = async () => {
  try {
    const response = await fetch(
      `https://thecocktaildb.com/api/json/v1/1/search.php?s=${searchBar.value}`
    );

    const data = await response.json();
    replaceCocktails(data.drinks);
  } catch (error) {
    console.error(error);
  }
};

const replaceCocktails = (cocktailArray) => {
  console.log(cocktailArray);

  cocktailsContainer.innerHTML = "";

  cocktailArray.forEach((element) => {
    cocktailsContainer.innerHTML += `<div class="card">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/Klassiche_Margarita.jpg" alt="" />
          <div class="container">
            <h2>${element.strDrink}</h2>
            <p>muy rica</p>
          </div>
        </div>`;
  });
};
