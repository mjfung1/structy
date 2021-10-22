

// n = length of array
// time:  O(n^2)
// space: O(n^2)


class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// inorder     left, self, right
// postorder   left, right, self

const buildTreeInPost = (inOrder, postOrder) => {
  if (postOrder.length === 0) return null;
  // todo
  const value = postOrder[postOrder.length-1];
  const root = new Node(value);
  const mid = inOrder.indexOf(value);
  const leftInOrder = inOrder.slice(0, mid);
  const rightInOrder = inOrder.slice(mid+1);
  const leftPost = postOrder.slice(0, mid);
  const rightPost = postOrder.slice(mid, postOrder.length-1);
  
  root.left = buildTreeInPost(leftInOrder, leftPost);
  root.right = buildTreeInPost(rightInOrder, rightPost);
  return root;
};
