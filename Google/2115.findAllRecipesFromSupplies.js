

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



// ------------------------------
// topological sort. better complexity

var findAllRecipes = function(recipes, ingredients, supplies) {
    const graph = {};
    const indegrees = {};
    
    for (let i = 0; i < ingredients.length; i++) {
        let ingredientArr = ingredients[i];
        for (let item of ingredientArr) {
            if (!(item in graph)) graph[item] = [];
            if (!(recipes[i] in indegrees)) indegrees[recipes[i]] = 0;
            
            // items that can make such recipe
            // indegrees of recipe
            graph[item].push(recipes[i]);
            indegrees[recipes[i]]++;
        }
    }
    
    let queue = [ ...supplies ];
    let output = [];
    
    while (queue.length) {
        let ingredient = queue.shift();
        
        if ((ingredient in graph)) {
            for (let recipe of graph[ingredient]) {
                indegrees[recipe]--;
                if (indegrees[recipe] === 0) {
                    
                    output.push(recipe);
                    
                    // push new item to supplies
                    queue.push(recipe);
                }
            }
        }
    }
    
    return output;

};