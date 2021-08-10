


// 103. Binary Tree Zigzag Level Order Traversal

var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let stack = [ {node: root, levelNum: 0} ];
    let levels = [];
    
    while (stack.length) {
        let { node, levelNum } = stack.pop();
        
        if (levels[levelNum] === undefined) levels[levelNum] = [];
        levels[levelNum].push(node.val);
        
        if (node.right) stack.push( {node: node.right, levelNum: levelNum+1} )
        if (node.left) stack.push( {node: node.left, levelNum: levelNum+1} );
    }
    
    let count = 0;
    let output = [];
    for (let level of levels) {
        if (count % 2 !== 0) output.push(level.reverse());
        else output.push(level);
        count++;
    }
    
    return output;
};