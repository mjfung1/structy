
// 129. Sum Root to Leaf Numbers


var sumNumbers = function(root) {
    // get subarrs [[1,2], [1,3]]
    const allPaths = getPaths(root);
    // ['12', '13'];
    let stringNums = allPaths.map(subarr => subarr.join(''));
    
    return stringNums.reduce((acc, red) => Number(acc) + Number(red));
};

const getPaths = (root) => {
    if (!root) return [];
    if (!root.left && !root.right) return [ [root.val] ];
    
    const allPaths = [];
    
    let leftSubPaths = getPaths(root.left);
    for (let sub of leftSubPaths) {
        allPaths.push([ root.val, ...sub ]);
    }
    
    let rightSubPaths = getPaths(root.right);
    for (let sub of rightSubPaths) {
        allPaths.push([ root.val, ...sub ]);
    }
    
    return allPaths;
};