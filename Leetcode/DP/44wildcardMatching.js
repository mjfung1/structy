

// 44. Wildcard Matching

var isMatch = function(s, p, i=0, j=0, memo={}) {
    let key = i + ',' + j;
    if (key in memo) return memo[key];
    
    if (i === s.length && j === p.length) return true;
    if (i > s.length) return false;
    
    
    if (s[i] === p[j]) {
        memo[key] = isMatch(s, p, i+1, j+1, memo)
        return memo[key];
    } else if (p[j] === '?') {
        memo[key] = isMatch(s, p, i+1, j+1, memo);
        return memo[key];
    } else if (p[j] === '*') {
        memo[key] = (isMatch(s, p, i, j+1, memo) || isMatch(s, p, i+1, j, memo));
        return memo[key];
    } 
    
    memo[key] = false;
    return false
};
