

var isMatch = function (s, p) {
  if (p.length === 0) {
    return s.length === 0;
  }

  let firstMatch = s.length && (s[0] === p[0] || p[0] === ".");

  // if star at second location - but first check if it has length of at least 2
  if (p.length >= 2 && p[1] === "*") {
    return (
      isMatch(s, p.slice(2)) || // skip - not use the start at all
      (firstMatch && isMatch(s.slice(1), p)) // use star. 1+reps. only if it matches
    );
  } else {
    // if no firstMatch - just return false;
    // no '*' at second location
    return firstMatch && isMatch(s.slice(1), p.slice(1));
  }
};

