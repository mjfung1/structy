
// 987. Vertical Order Traversal of a Binary Tree


var verticalTraversal = function(root) {
    let queue = [ {node: root, index: 0, level: 0}];
    
    let neg = [];
    let pos = [];
    
    while (queue.length) {
        let {node, index, level} = queue.shift();

        if (index >= 0) {
            if (pos[index] === undefined) pos[index] = [];
            pos[index].push({ node: node.val, level});
        } else {
            let temp = Math.abs(index);
            if (neg[temp] === undefined) neg[temp] = [];
            neg[temp].push({ node: node.val, level});
        }

        if (node.left) queue.push({node: node.left, index: index-1, level: level+1});
        if (node.right) queue.push({node: node.right, index: index+1, level: level+1});
    }

    neg = neg.slice(1).reverse();

    let combined = [...neg, ...pos];
    combined.map(subarr => subarr.sort((a,b) => a.level - b.level || a.node - b.node));

    let output = [];
    
    for (let sub of combined) {
        output.push(sub.map(ele => ele.node));
    }
    
    return output;
  
};