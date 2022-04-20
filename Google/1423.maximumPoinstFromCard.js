

// 1423. Maximum Points You Can Obtain from Cards

// Sliding Window approach
var maxScore = function(cardPoints, k) {
    
    let left = 0;
    // minus k for sliding window;
    let right = cardPoints.length - k;
    
    // adding cards from right
    let sum = 0;
    for (let i = right; i < cardPoints.length; i++) {
        let point = cardPoints[i];
        sum += point;
    }
    
    let total = sum;
    
    while (right < cardPoints.length) {
        // add left card and substract right card as we move window.
        total += ( cardPoints[left] - cardPoints[right] );
        sum = Math.max( sum, total );
        
        left++;
        right++;
    }
    
    return sum;
};


// DP. TLE
var maxScore = function(cardPoints, k) {
    return score(cardPoints, k, 0, cardPoints.length - 1);
};

const score = (cardPoints, k, left, right, memo = {}) => {
    let key = left + ',' + right;
    if (key in memo) return memo[key];
    
    if (k === 0) return 0;
    
    let takeLeft = cardPoints[left] + score(cardPoints, k - 1, left + 1, right, memo);
    let takeRight = cardPoints[right] + score(cardPoints, k - 1, left, right - 1, memo);
    
    let result = Math.max(takeLeft, takeRight);
    
    memo[key] = result;
    return result;
};