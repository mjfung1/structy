



const longestStreak = (head) => {
  // todo
  let pointer1 = head;
  let pointer2 = head;
  
  let maxStreak = 0;
  let localStreak = 0;
  
  while (pointer2) {
    
    if (pointer1.val === pointer2.val) {
      localStreak++;
      maxStreak = Math.max(maxStreak, localStreak);
      pointer2 = pointer2.next;
    } else {
      localStreak = 0;
      pointer1 = pointer2;
    }
  }
    
    
    
  return maxStreak;
};


// -------------------------------------
const longestStreak = (head) => {
  // todo
  let current = head;
  let prevVal = null;
  
  let maxStreak = 0;
  let localStreak;
  
  while (current) {
    if (current.val === prevVal) {
      localStreak += 1;
    } else {
      localStreak = 1;
    }
    
    maxStreak = Math.max(maxStreak, localStreak);
    
    prevVal = current.val;
    current = current.next;
  }
    
  return maxStreak;
};
