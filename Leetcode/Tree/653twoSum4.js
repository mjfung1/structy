
// 653. Two Sum IV - Input is a BST


var findTarget = function(root, k) {
    let set = new Set();
    
    if (sumFinder(root, k, set)) return true;
    
    return false;
};

const sumFinder = (root, k, set) => {
    if (!root) return false;
    
    let needed = k - root.val;
    
    if (set.has(needed)) return true;
    set.add(root.val);
    
    return sumFinder(root.left, k, set) || sumFinder(root.right, k, set);
};