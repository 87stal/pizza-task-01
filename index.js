const menuPizza = {
  cap: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    sausage: 2,
    mashroom: 3,
    cheese: 1,
  },
  onions: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    meat: 1,
    cheese: 1,
  },
  king_one: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    mayo: 1,
    mashroom: 3,
    tomato: 2,
    cheese: 3,
    dill: 2,
    parsley: 2,
  },
  gavay: {
    dough: 1,
    tomato_sauce: 1,
    onion: 2,
    ananas: 1,
    cheese: 2,
  },
  tonno: {
    dough: 1,
    tomato_sauce: 1,
    tuna: 2,
    kappers: 1,
    cheese: 1,
  },
  vegeterian: {
    dough: 1,
    tomato_sauce: 1,
    tomato: 2,
    kappers: 1,
    cucumber: 2,
    onion: 2,
    cheese: 1,
  },
};

function getPizzaInfo(lastPizza) {

  //Get list with amount of each pizza
  const popularCount = lastPizza.reduce((listPizza, pizza) => {
    listPizza[pizza] = (listPizza[pizza] || 0) + 1;
    return listPizza;
  }, {});

  //Sorting pizza
  const sortingPizza = Object.entries(popularCount).sort((a, b) => b[1] - a[1]);

  //Get list of most popular
  const popular = sortingPizza.reduce((listPizza, pizza) => {
    if (listPizza.length < 5) {
      listPizza.push(pizza[0]);
    }
    return listPizza;
  }, []);

  //Get list all ingredients for popular pizza
  const allIngredients = Object.entries(menuPizza).reduce(
    (ingredients, produсt) => {
      const ingredient = Object.entries(produсt[1]);

      if (popular.includes(produсt[0])) {
        ingredients.push(...ingredient);
      }
      return ingredients;
    },
    []
  );

  //Get list ingridient by amount
  const listPopularIngredients = allIngredients.reduce((tally, ingredient) => {
    tally[ingredient[0]] = (tally[ingredient[0]] || 0) + ingredient[1];
    return tally;
  }, {});

  //Get list of sorted ingridients
  const ingridients = Object.entries(listPopularIngredients)
    .sort((a, b) => a[1] - b[1]) 
    .map((ingredient) => ingredient[0]);

    
  //Insert results in HTML
  document
    .querySelector("#popular")
    .insertAdjacentHTML("beforeend", `Popular: ${popular}`);
  document
    .querySelector("#ingredients")
    .insertAdjacentHTML("beforeend", `Ingredients: ${ingridients}`);

  return {
    popular,
    ingridients,
  };
}

  getPizzaInfo([
    "cap",
    "cap",
    "onions",
    "gavay",
    "cap",
    "tonno",
    "vegeterian",
    "vegeterian",
    "vegeterian",
    "king_one",
    "tonno",
    "tonno",
    "tonno",
  ])

