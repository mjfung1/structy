
// using a hashmap (object)

// n = length of string
// Time: O(n)
// Space: O(n)

const mostFrequentChar = (s) => {
  const count = {};
  
  for (let char of s) {
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1
  }
  
  let best = null;
  for (let char of s) {
    if (best === null || count[char] > count[best]) {
      best = char;
    }
  }
  return best;
};


// ------------------------------------------ //

const mostFrequentChar = (s) => {
  // todo
  let maxCount = 0;
  let freq = {};
  
  for (let char of s) {
    if (!freq[char]) freq[char] = 0;
    freq[char]++;
    if (freq[char] > maxCount) maxCount = freq[char];
  }
  
  for (let char of s) {
    if (freq[char] === maxCount) return char;
  }
};