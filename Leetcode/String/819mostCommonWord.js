


var mostCommonWord = function(paragraph, banned) {
    let arr = process(paragraph);
    let counter = {};
    let max = 0;
    
    for (let word of arr) {
        if (!banned.includes(word)) {
            counter[word] = ++counter[word] || 1;
            max = Math.max(max, counter[word]);
        }
    }
    console.log(counter)
    for (let word of arr) {
        if (counter[word] === max) return word;
    }
    
};

const process = (string) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    const output = [];
    let newStr = '';
    
    for (let char of string) {
        let lowerCased = char.toLowerCase();
        
        if (alpha.includes(lowerCased)) {
            newStr += lowerCased;
    
        } else {
            if (newStr.length > 0) {
                output.push(newStr);
                newStr = '';
            }
        }
    }
    
    output.push(newStr);
    
    return output;
};