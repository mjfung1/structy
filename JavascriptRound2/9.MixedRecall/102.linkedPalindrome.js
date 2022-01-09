


const linkedPalindrome = (head) => {
  // todo
  const values = [];
  getValues(head, values);
  return isPalindrome(values);
  
};

const getValues = (head, values) => {
  let current = head;
  
  while (current) {
    values.push(current.val);
    current = current.next;
  }
};

const isPalindrome = (array) => {
  let i = 0;
  let j = array.length - 1;
  
  while (i <= j) {
    if (array[i] !== array[j]) return false;
    
    i++;
    j--;
  }
  
  return true;
};
