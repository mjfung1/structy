

const longestStreak = (head) => {
  // todo
  let longest = 0;
  let streak = 0;
  let slow = head;
  let current = head;
  
  while (current) {
    if (slow.val === current.val) {
      streak++;
      current = current.next;
      longest = Math.max(longest, streak);
    } else {
      slow = current;
      streak = 0;
    }
  }
  
  return longest;
};

// -------------------------------------------- //

const longestStreak = (head) => {
  // todo
  let max = 0;
  let count = 0;
  let slow = head;
  let fast = head;
  
  while (fast) {
    
    while (fast && slow.val === fast.val) {
      count++;
      fast = fast.next;
    } 
    
    max = Math.max(max, count);
    count = 0;
    slow = fast;
    
  }
}



// ----------------------------------- //
// iterative
// n = number of nodes
// Time: O(n)
// Space: O(1)
const longestStreak = (head) => {
  let maxStreak = 0;
  let currentStreak = 0;
  let currentNode = head;
  let prevVal = null;
  
  while (currentNode !== null) {
    if (currentNode.val === prevVal) {
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }
    
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
    }
    
    prevVal = currentNode.val;
    currentNode = currentNode.next;
  }
  
  return maxStreak;
};

