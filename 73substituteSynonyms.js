
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

  if (firstWord in synonyms) {
    const result = [];

    const subArrays = generate(remainder, synonyms);
    for (const word of synonyms[firstWord]) {
      // why spread operators.
      // bc we are iterating many times. dont want to mutate arrays.
      result.push(...subArrays.map((subArray) => [word, ...subArray]));
    }
    return result;
  } else {
    const subArrays = generate(remainder, synonyms);
    return subArrays.map((subArray) => [firstWord, ...subArray]);
  }
};