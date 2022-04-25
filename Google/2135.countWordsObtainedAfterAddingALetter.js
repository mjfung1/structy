

// 2135. Count Words Obtained After Adding a Letter


var wordCount = function(startWords, targetWords) {
    const set = new Set();
    
    for (let word of startWords) {
        let newWord = word.split('').sort().join('');
        set.add(newWord);
    }
    
    let count = 0;
    
    for (let word of targetWords) {
        let sorted = word.split('').sort().join('');
        
        for (let i = 0; i < sorted.length; i++) {
            let subString = sorted.slice(0, i) + sorted.slice(i + 1);
            
            if (set.has(subString)) {
                count++;
                break;
            }
        }
        
    }
    
    return count;
};