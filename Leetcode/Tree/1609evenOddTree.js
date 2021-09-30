
// 1609. Even Odd Tree

var isEvenOddTree = function(root) {
    const levels = [];
    levelOrder(root, 0, levels);
    
    let count = 0;
    for (let level of levels) {
        if (count % 2 !== 0) {
            if (!isDecreasing(level)) return false;
        } else {
            if (!isIncreasing(level)) return false;
        }
        count++;
    }
    
    return true;
};

const isIncreasing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        
        if (current % 2 === 0) return false;
        if (next <= current) return false;
    }
    
    return true;
};



const isDecreasing = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let current = arr[i];
        let next = arr[i + 1];
        
        if (current % 2 !== 0) return false;
        if (next >= current) return false;
    }
    
    return true;
};

const levelOrder = (root, level, levels) => {
    if (!root) return;
    
    if (levels[level] === undefined) levels[level] = [];
    levels[level].push(root.val);
    levelOrder(root.left, level + 1, levels);
    levelOrder(root.right, level + 1, levels);
}