

// n = length of array
// time:  O(n^2)
// space: O(n^2)

const buildTreeInPre = (inOrder, preOrder) => {
  // todo
  if (!inOrder.length || !preOrder.length) return null;
  
  let value = preOrder[0];
  let root = new Node(value);
  let mid = inOrder.indexOf(value);
  let leftInOrder = inOrder.slice(0, mid);
  let rightInOrder = inOrder.slice(mid+1);
  let leftpreOrder = preOrder.slice(1, mid+1);
  let rightPreOrder = preOrder.slice(mid+1);
  root.left = buildTreeInPre(leftInOrder, leftpreOrder);
  root.right = buildTreeInPre(rightInOrder, rightPreOrder);
  return root;
};


// --------------------------------------------- //
// recursive in-place. DONT KNOW IT. FOR REFERENCE. 
// DID NOT CODE MYSELF 

// n = length of array
// time:  O(n)
// space: O(n)

const buildTreeInPre = (
  inOrder, 
  preOrder, 
  inOrderStart = 0, 
  inOrderEnd = inOrder.length - 1, 
  preOrderStart = 0, 
  preOrderEnd = preOrder.length - 1) => {
    if (inOrderEnd < inOrderStart) return null;
    const value = preOrder[preOrderStart];
    const root = new Node(value);
    const mid = inOrder.indexOf(value);
    const leftSize = mid - inOrderStart;
    root.left = buildTreeInPre(
      inOrder, 
      preOrder, 
      inOrderStart, 
      mid - 1, 
      preOrderStart + 1, 
      preOrderStart + leftSize
    );
    root.right = buildTreeInPre(
      inOrder, 
      preOrder, 
      mid + 1, 
      inOrderEnd, 
      preOrderStart + leftSize + 1, 
      preOrderEnd
    );
    return root;
};