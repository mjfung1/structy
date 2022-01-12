



const positioningPlants = (costs, position = 0, prevPlant = null, memo={}) => {
  const key = position + ',' + prevPlant;
  if (key in memo) return memo[key];
  if (position === costs.length) return 0;
  
  let rowOfPlants = costs[position];
  
  let result = Infinity;
  for (let plant = 0; plant < rowOfPlants.length; plant++) {
    if (plant !== prevPlant) {
      let candidate = rowOfPlants[plant] + positioningPlants(costs, position + 1, plant, memo);
      result = Math.min( result,  candidate );
    }
  }
  memo[key] = result;
  return result;
};
