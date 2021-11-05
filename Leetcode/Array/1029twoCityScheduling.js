
// 1029. Two City Scheduling


var twoCitySchedCost = function(costs) {
    costs.sort((a,b) => (a[0] - a[1]) - (b[0] - b[1]));
    
    let minCost = 0;
    
    let mid = Math.floor(costs.length / 2);
    for (let i = 0; i < costs.length; i++) {
        let cost = costs[i];
        if (i < mid) {
            minCost += cost[0];
        } else {
            minCost += cost[1];
        }
    }
    
    return minCost;
};