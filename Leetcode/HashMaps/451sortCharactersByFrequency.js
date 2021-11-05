
// 451. Sort Characters By Frequency

var frequencySort = function(s) {
    let freq = {};
    
    for (let char of s) {
        freq[char] = ++freq[char] || 1;
    }
    
    let arr = Object.keys(freq).sort((a,b) => freq[b] - freq[a]);
    
    let str = '';
    for (let char of arr) {
        str += char.repeat(freq[char]);
    }
    
    return str;
};