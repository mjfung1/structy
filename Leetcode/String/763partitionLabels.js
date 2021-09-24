
// 763. Partition Labels
// time: O(n)
// space: O(n)


var partitionLabels = function(s) {
    const freq = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if (!(char in freq)) freq[char] = [];
        freq[char].push(i);
    }
    
    // iterate thru each char
    // if char falls within. compare maxes. if within dont update. if greater update
    // if char falls outside max index means, new partition
    
    let max = Math.max(...freq[s[0]]);
    let min = Math.min(...freq[s[0]]);
    const output = [];
    
    for (let i = 1; i < s.length; i++) {
        let char = s[i];
        // let localMin = Math.min(...freq[char]);
        // let localMax = Math.max(...freq[char]);
        
        // how to improve time complexity above??
        // access their first and last index
        // array should be from lowest to highest since we pushed
        
        let localMin = freq[char][0];
        let localMax = freq[char][freq[char].length - 1];
        
        if (localMin <= max) {
            if (localMax > max) max = localMax;
            
        } else {
            output.push(max - min + 1);
            min = localMin;
            max = localMax;
        }
    }
    
    output.push(max - min + 1);
    
    return output;
};