
// 1833. Maximum Ice Cream Bars

// time: O(nlogn);
// space: O(1);
var maxIceCream = function(costs, coins) {
    costs.sort((a,b) => a-b);
    
    let amount = coins;
    let iceCreams = 0;
    for (let cost of costs) {
        amount -= cost;
        if (amount < 0) break;
        iceCreams++;
    }
        
    return iceCreams;
};



// ----------------------------------------------------
// or can use heap to reduce complexity
// n = costs length
// time: O(n + log(n));
// space: (n)
var maxIceCream = function(costs, coins) {
    const pq = new MinPriorityQueue();
    
    for (let cost of costs) pq.enqueue(cost, cost);
 
    let amount = coins;
    let iceCreams = 0;
    
    while (pq.size()) {
        let {priority, element} = pq.dequeue();
        if (amount - priority < 0) break;
        amount -= priority;
        iceCreams++;
    }
        
    return iceCreams;
};