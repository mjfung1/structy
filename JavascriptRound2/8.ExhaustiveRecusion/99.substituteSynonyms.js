
// time: O( m ^ n ); permutations

const substituteSynonyms = (sentence, synonyms) => {
  // todo
  const words = sentence.split(' ');
  const subarrays = generate(words, synonyms); // [['chase', 'gold', ...], ..., ['pursue', 'gold', ...]]
  return subarrays.map(subarray => subarray.join(' '));
};


const generate = (words, synonyms) => {
  // so we can push words in
  if (words.length === 0) return [[]];
  
  let word = words[0];
  let subarrays = generate(words.slice(1), synonyms); // [ [] ]
  let result = [];
  
  if (word in synonyms) {
      
    for (let synonym of synonyms[word]) {
      
      for (let subarray of subarrays) {
        result.push([ synonym, ...subarray ]);
      }
    }
    
  } else {
    for (let subarray of subarrays) {
      result.push([ word, ...subarray ]);
    }
  }
  
  return result;
};

