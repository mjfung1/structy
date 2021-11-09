
// 422. Valid Word Square
// time: O(m* n);
// spac: O(1);
  function validWordSquare(words) {
    // Write your code here
    for (let row = 0; row < words.length; row++) {
        for (let col = 0; col < words[row].length; col++) {
            if (words[row][col] !== words[col][row]) return false;
        }
    }
    
    return true;
  }