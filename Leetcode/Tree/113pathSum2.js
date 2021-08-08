
// 113. Path Sum II


var pathSum = function(root, targetSum) {
    const paths = [];
    
    pathFinder(root, targetSum, paths, []);
    
    return paths;
};

const pathFinder = (root, target, arr, path) => {
    if (!root) return;
    if (!root.left && !root.right && target === root.val) {
        arr.push([...path, root.val]);
    }
    
    pathFinder(root.left, target - root.val, arr, [...path, root.val]);
    pathFinder(root.right, target - root.val, arr, [...path, root.val]);
};