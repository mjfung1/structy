
// another attempt. this time processed while dfsing.
var smallestFromLeaf = function(root) {
    // find the least sum from root to leaf, while keeping the values and convert
    let values = getPath(root);
   
    let strings = values.map(subarr => subarr.join(''));
    let min = strings[0];
    
    for (let i = 1; i < strings.length; i++) {
        let string = strings[i];
        if (string < min) min = string;
    }
    return min;
};

const getPath = (root) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    if (!root) return [ ];
    
    let letter = alphabet[root.val];
    if (!root.left && !root.right) return [ [ letter ] ];
    
    const allPaths = [];
    
    let leftSubPaths = getPath(root.left);
    for (let subPath of leftSubPaths) {
        allPaths.push([ ...subPath, letter ]);
    }
    
    let rightSubPaths = getPath(root.right);
    for (let subPath of rightSubPaths) {
        allPaths.push([ ...subPath, letter ]);
    }
    
    return allPaths;
};


// ------------------------------------------------------ //

// a little bit improved. i guess?? shorter code??
var smallestFromLeaf = function(root) {
    // find the least sum from root to leaf, while keeping the values and convert
    let values = getPath(root);
   
    for (let value of values) {
        value.reverse();
    }
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    let stringArr = values.map(subarr => subarr.map(index => alphabet[index]));
    stringArr = stringArr.map(sub => sub.join(''));
    
    let min = stringArr[0];
    
    for (let i = 1; i < stringArr.length; i++) {
        let word = stringArr[i];
        if (word < min) min = word;
    }
    
    return min;
};

const getPath = (root) => {
    if (!root) return [ ];
    if (!root.left && !root.right) return [ [ root.val ] ];
    
    const allPaths = [];
    
    let leftSubPaths = getPath(root.left);
    for (let subPath of leftSubPaths) {
        allPaths.push([ root.val, ...subPath ]);
    }
    
    let rightSubPaths = getPath(root.right);
    for (let subPath of rightSubPaths) {
        allPaths.push([ root.val, ...subPath ]);
    }
    
    return allPaths;
};





// ----------------------------------------------- //
// first implementation. very naive.  can just compare string in javascript

var smallestFromLeaf = function(root) {
    // find the least sum from root to leaf, while keeping the values and convert
    let values = getPath(root);
   
    for (let value of values) {
        value.reverse();
    }
    
    let minSubarr = values[0];
    for (let i = 1; i < values.length; i++) {
        let subarr = values[i];
        let length = Math.max(minSubarr.length, subarr.length);
        
        for (let j = 0; j < length; j++) {
            let ele1 = minSubarr[j] === undefined ? -Infinity : minSubarr[j];
            let ele2 = subarr[j] === undefined ? -Infinity : subarr[j];
            
            if (ele2 < ele1) {
                minSubarr = subarr;
                break;
            } else if (ele2 > ele1) {
                break;
            }
        }
    }
    
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = [];
    
    for (let i = 0; i < minSubarr.length; i++) {
        let index = minSubarr[i];
        result.push(alphabet[index]);
    }
    
    return result.join('');
    
};

const getPath = (root) => {
    if (!root) return [ ];
    if (!root.left && !root.right) return [ [ root.val ] ];
    
    const allPaths = [];
    
    let leftSubPaths = getPath(root.left);
    for (let subPath of leftSubPaths) {
        allPaths.push([ root.val, ...subPath ]);
    }
    
    let rightSubPaths = getPath(root.right);
    for (let subPath of rightSubPaths) {
        allPaths.push([ root.val, ...subPath ]);
    }
    
    return allPaths;
};