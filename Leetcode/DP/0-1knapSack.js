
// not that hard.  it's just pick or not pick;

class Solution {
  //Function to return max value that can be put in knapsack of capacity W.
  knapSack(W, wt, val, n, memo = new Map()) {
    // code here
    let key = W + "," + n;
    if (memo.has(key)) return memo.get(key);

    // pick or not pick
    if (n === 0 || W === 0) return 0;

    // if first item is heavier than capacity skip
    let solution;

    if (wt[n - 1] > W) {
      
      solution = this.knapSack(W, wt, val, n - 1, memo);
    } else {

      // if weight is within capacity
      // two options put it or not put in
      let withItem = val[n - 1] + this.knapSack(W - wt[n - 1], wt, val, n - 1, memo);
      let withOutItem = this.knapSack(W, wt, val, n - 1, memo);

      solution = Math.max(withItem, withOutItem);
    }

    memo.set(key, solution);
    return solution;
  }
}