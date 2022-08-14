const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let recipeNamesA = [];
  let recipeNamesB = [];
  const ingredientsCheck = function (bakery,recipe) {
    let recipeNames = [];
    for (let i in bakery){
      for (let j in recipe)
        if (bakery[i] === recipe[j].ingredients[0] || bakery[i] === recipe[j].ingredients[1]){
          recipeNames.push(recipe[j].name);
          //console.log(recipeNames);
      }
    }
    return recipeNames;
  }    
  recipeNamesA = ingredientsCheck(bakeryA,recipes);
  recipeNamesB = ingredientsCheck(bakeryB,recipes);
  //console.log(recipeNamesA);
  //console.log(recipeNamesB);
  const compareRecipes = function() {
    for (let i in recipeNamesA){
      for (let j in recipeNamesB){
        if (recipeNamesA[i] === recipeNamesB[j]){
          return recipeNamesA[i];
        }
      }
    }
  }
  let jointRecipe = compareRecipes();
  return jointRecipe;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));