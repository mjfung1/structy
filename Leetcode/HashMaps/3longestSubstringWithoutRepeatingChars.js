
// 3. Longest Substring Without Repeating Characters
// add char
// add lagging pointer
    // if char is same 
    // move lagging pointer up until same char is gone
// record longest;

var lengthOfLongestSubstring = function(s) {
    let set = new Set();
    
    let left = 0;
    let longest = 0;
    
    for (let idx = 0; idx < s.length; idx++) {
        let char = s[idx];
        
        // if char in set; we must start deleting from left pointer 
            // until same char is deleted
        while (set.has(char)) {
            let char = s[left];
            set.delete(char);
            left++;
        }
        
        set.add(char);
        
        longest = Math.max(longest, set.size);
    }
    
    return longest;
};