

// 2115. Find All Possible Recipes from Given Supplies
// brute force
var findAllRecipes = function(recipes, ingredients, supplies) {
    let set = new Set(supplies);
    
    const output = new Set();
   
    for (let j = 0; j < recipes.length; j++) {  
        for (let i = 0; i < recipes.length; i++) {
            let recipe = recipes[i];
            let ingredient = ingredients[i];

            if (hasAllIngredients(ingredient, set)) {
                changed = true;
                output.add(recipe);
                set.add(recipe);
            }
        }
        
    }

    
    return Array.from(output);
};

const hasAllIngredients = (ingredients, set) => {
    
    for (let ingredient of ingredients) {
        if (!set.has(ingredient)) return false;
    }
    
    return true;
}