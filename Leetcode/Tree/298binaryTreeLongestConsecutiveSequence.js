// marker

// recursive
const longestConsecutive = (root) => {
    // write your code here
    let result = 0;
    const lc = (root) => {
        if (!root) return 0;

        let left = lc(root.left);
        let right = lc(root.right);
        let max = 1;
        if (root.left === null || root.left.val === root.val + 1) {
            max = Math.max(max, left + 1);
        }

        if (root.right === null || root.right.val === root.val + 1) {
            max = Math.max(max, right + 1);
        }

        result = Math.max(result, max);
        
        return max;
    }
    return result;
  }


//   iterative
const longestConsecutive = (root) => {
    // write your code here
    if (!root) return 0;
    const stack = [ { node: root, length: 1} ];
    let maxLength = 1;

    while (stack.length) {
        const { node, length } = stack.pop();

        if (node.left) {
            if (node.val + 1 === node.left.val) {
                stack.push({node: node.left, length: length + 1});
                maxLength = Math.max(maxLength, length + 1);
            } else {
                stack.push({ node: node.left, length: 1});
            }
        }

        if (node.right) {
            if (node.val + 1 === node.right.val) {
                stack.push({node: node.right, length: length + 1});
                maxLength = Math.max(maxLength, length + 1);
            } else {
                stack.push({ node: node.right, length: 1});
            }
        }
    }


    return maxLength;
  }
