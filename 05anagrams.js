
// n = length of string 1
// m = length of string 2
// time:  O(n + m)
// space: O(n)

const anagrams = (s1, s2) => {
  const count = {};
  for (let char of s1) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  
  for (let char of s2) {
    if (count[char] === undefined) {
      return false;
    } else {
      count[char] -= 1;
    }
  }
  
  for (let char in count) {
    if (count[char] !== 0) {
      return false;
    }
  }
  
  return true;
};


// ---------------------------------- //
// time:  O(n)
// space: O(n)

const anagrams = (s1, s2) => {
  // todo
  if (s1.length !== s2.length) return false;
  const hash = {};
  
  for (let char of s1) {
    hash[char] = ++hash[char] || 1;
  }
  
  for (let char of s2) {
    // here freq[char] can be 0 || undefined => falsey vals; 
    if (!hash[char]) return false;
    hash[char]--;  
  }
  
  return true;
};
