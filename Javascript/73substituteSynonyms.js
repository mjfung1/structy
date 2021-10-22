
// n = number of words in sentence
// m = max number of synonyms for a word
// Time: ~O(m^n)
// Space: ~O(m^n)

const substituteSynonyms = (sentence, synonyms) => {
  // todo
  const words = sentence.split(" ");
  const arrays = generate(words, synonyms);
  return arrays.map((subArray) => subArray.join(" "));
};

const generate = (words, synonyms) => {
  if (words.length === 0) return [[]];

  let firstWord = words[0];
  let remainder = words.slice(1);
  const subArrays = generate(remainder, synonyms);

  if (firstWord in synonyms) {
    const result = [];
    for (const word of synonyms[firstWord]) {
      // why spread operators.
      // bc we are iterating many times. dont want to mutate arrays.
      result.push(...subArrays.map((subArray) => [word, ...subArray]));
    }
    return result;
  } else {
    return subArrays.map((subArray) => [firstWord, ...subArray]);
  }
};

// --------------------------------------------------- //
// refactored

const substituteSynonyms = (sentence, synonyms) => {
  // todo
  const words = sentence.split(" ");
  const arrays = generate(words, synonyms);
  return arrays.map((array) => array.join(" "));
};

const generate = (words, synonyms) => {
  if (words.length === 0) return [[]];

  let firstWord = words[0];
  let remainderWords = words.slice(1);
  let subArrays = generate(remainderWords, synonyms);

  let result = [];
  if (firstWord in synonyms) {
    for (let synonym of synonyms[firstWord]) {
      for (let subArray of subArrays) {
        result.push([synonym, ...subArray]);
      }
    }
  } else {
    for (let subArray of subArrays) {
      result.push([firstWord, ...subArray]);
    }
  }
  return result;
};