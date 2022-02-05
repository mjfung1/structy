
// recursive
var isSubsequence = function(s, t) {
    if (s.length === 0) return true;
    if (t.length === 0) return false;
    
    
    if (s[0] === t[0]) {
        return isSubsequence(s.slice(1), t.slice(1));
    } else {
        // not the same
        return isSubsequence(s, t.slice(1));
    }
};


// iterative
var isSubsequence = function(s, t) {
    let i = 0;
    let j = 0;
    
    while (i < s.length && j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }
    }

    return i === s.length;
};