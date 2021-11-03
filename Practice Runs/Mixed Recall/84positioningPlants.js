
// n = # of garden positions (rows)
// m = # of plant types (columns)
// Time: O(nm)
// Space: O(nm)

const positioningPlants = (costs, i=0, prevFlower=null, memo={}) => {
  let key = i + ',' + prevFlower;
  if (key in memo) return memo[key];
  
  if (i === costs.length) return 0;
  
  let flowers = costs[i];
  
  let min = Infinity;
  
  for (let flower = 0; flower < flowers.length; flower++) {
    let flowerPrice = flowers[flower];
    if (flower !== prevFlower) {
      let cost = positioningPlants(costs, i+1, flower, memo);
      min = Math.min(min, cost + flowerPrice);
    }
  }
  
  memo[key] = min;
  return min;
};