
// Time Complexity:
// O(1)O(1) for addScore.
// O(1)O(1) for reset.
// O(NlogK) for extractMin

// Space Complexity:
// O(N + K)O(N+K) where O(N)O(N) is used by the scores dictionary and O(K)O(K) is used by the heap.

var Leaderboard = function() {
    this.scoreboard = {};
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    const scoreboard = this.scoreboard;
    if (!(playerId in scoreboard)) {
        scoreboard[playerId] = 0;
    } 
    
    scoreboard[playerId] += score;
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    let minpq = new MinPriorityQueue();
    let scoreboard = this.scoreboard;
    for (let key in scoreboard) {
        
        minpq.enqueue(scoreboard[key], scoreboard[key]);
        if (minpq.size() > K) minpq.dequeue();
    }
    let topK = 0;
    while (minpq.size()) {
        let ele = minpq.dequeue();
        topK += ele.priority;
    }
    
    return topK;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    const scoreboard = this.scoreboard;
    scoreboard[playerId] = 0;
};