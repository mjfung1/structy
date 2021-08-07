


var widthOfBinaryTree = function(root) {    
    
    while (root.left && !root.right) {
        root = root.left
    }

    while (root.right && !root.left) {
        root = root.right
    }
    
    
    let queue = [ [root, 0] ];
    let maxWidth = 0;
    
    while (queue.length) {
        let size = queue.length;
        
        let node = queue[0];
        let startIdx = node[1];
        let currentIdx;
        
        while (size) {
            
            let [node , index] = queue.shift();
            currentIdx = index;
            if (node.left) queue.push( [ node.left, 2 * index ] );
            if (node.right) queue.push( [ node.right, 2 * index + 1 ] ); 
            size--;
        }
        
        maxWidth = Math.max(maxWidth, currentIdx - startIdx + 1);
    }
    
    return maxWidth;
};


// -------------------------------- //
// recursive
var widthOfBinaryTree = function(root) {
    let maxWidth = 0;
    let firstValues = [];
    
    while (root.left && !root.right) root = root.left;
    while (root.right && !root.left) root = root.right;
    
    const dfs = (root, level, index) => {
        if (!root) return null;
        
        if (firstValues[level] === undefined) firstValues[level] = index;
        
        maxWidth = Math.max(maxWidth, (index - firstValues[level] + 1));
        
        dfs(root.left, level+1, 2 * index);
        dfs(root.right, level+1, 2 * index + 1);
    };
    
    dfs(root, 0, 0);
    return maxWidth;
};