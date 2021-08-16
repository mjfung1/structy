
// marker

const upsideDownBinaryTree = (root) => {
    if (!root || !root.left) return root;

    let prev = null;
    let current = root;
    let next = null;
    let lastRight = null;

    while (current) {
        next = current.left;

        current.left = lastRight;
        lastRight = current.right;
        current.right = prev;

        prev = current;
        current = next;
    }

    return prev;
};