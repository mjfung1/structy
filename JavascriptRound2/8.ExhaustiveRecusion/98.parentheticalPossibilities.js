



const parentheticalPossibilities = (s) => {
  // todo
  // keep calling this function until string is empty;
  if (s.length === 0) return [''];
  
  // call this helper function to reduce size of s.
  let {remaining, options} = getOptions(s);
  
  let suffixes = parentheticalPossibilities(remaining);
  
  let result = [];
  
  for (let char of options) {
    for (let suffix of suffixes) {
      result.push(char + suffix);
    }
  }
  
  return result;
};

const getOptions = (string) => {
  
  if (string[0] === '(') {
    // find index of closed paren
    let indexOfClosedParen = string.indexOf(')');
    let remaining = string.slice(indexOfClosedParen + 1);
    let options = string.slice(1, indexOfClosedParen);
    
    return {remaining, options};
  } else {
    return {remaining: string.slice(1), options: string[0]}
  }
  
}







