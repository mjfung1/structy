

// 692. Top K Frequent Words
// Brute force. how to improve?? use PQ and pass in a custom compare
// time: O(nlog(n)). bc of sorting;
// space: O(n)
var topKFrequent = function(words, k) {
    const freqs = {};
    for (let word of words) {
        freqs[word] = ++freqs[word] || 1;
    }
    
    let array = []
    for (let key in freqs) {
        array.push([key, freqs[key]])
    }
    array.sort((a,b) => {
        if (a[1] == b[1]) {
            if (a[0] < b[0]) return -1;
            if (a[0] > b[0]) return 1;
            return 0;
        }
        return b[1] - a[1];
        
    })
    
    let output = [];
    let i = 0;
    while (i < k) {
        let item = array[i][0];
        output.push(item);
        i++;
    }
    
    return output;
};
