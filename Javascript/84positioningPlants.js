
// n = # of garden positions (rows)
// m = # of plant types (columns)
// time:  O(nm)
// space: O(nm)

const positioningPlants = (costs, i = 0, lastFlower = null, memo = {}) => {
  let key = i + "," + lastFlower;
  if (key in memo) return memo[key];
  if (i === costs.length) return 0;

  let minPrice = Infinity;

  for (let flower = 0; flower < costs[i].length; flower++) {
    let flowerCostAtRow = costs[i][flower];
    if (lastFlower !== flower) {
      let price =
        flowerCostAtRow + positioningPlants(costs, i + 1, flower, memo);
      minPrice = Math.min(minPrice, price);
    }
  }

  memo[key] = minPrice;
  return memo[key];
};
