
// 5. Longest Palindromic Substring

var longestPalindrome = function (s) {
  if (s == null || s.length === 1) return s;
  let start = 0,
    maxLen = 0;
  for (let i = 0; i < s.length - 1; i++) {
    extendPalindrome(s, i, i); // assume odd length, try to extend Palindrome as possible
    extendPalindrome(s, i, i + 1); // assume even length.
  }
  function extendPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
      left--;
      right++;
    }
    if (maxLen < right - left - 1) {
      start = left + 1;
      maxLen = right - left - 1;
    }
  }
  return s.substring(start, start + maxLen);
};


// ----------------------------------------- //


var longestPalindrome = function (s) {
  const dp = Array.from(Array(s.length), () => Array(s.length).fill(false));

  let lps = "";

  // if one letter, always palindrome
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  // two letters, if front and back are same then palindrome
  for (let i = 0; i < s.length - 1; i++) {
    let char1 = s[i];
    let char2 = s[i + 1];
    if (char1 === char2) {
      dp[i][i + 1] = true;

      // endIndex not inclusive
      lps = s.substring(i, i + 2);
    }
  }

  // why this pattern - basically we dont want window to be too wide in beginning
  // so i starts high - but nothing happens until j is than s.length;
  for (let i = 2; i < s.length; i++) {
    for (let j = 0; j < i; j++) {
      let char1 = s[i];
      let char2 = s[j];

      if (dp[j + 1][i - 1] && char1 === char2) {
        dp[j][i] = true;
        lps =
          s.substring(j, i + 1).length > lps.length
            ? s.substring(j, i + 1)
            : lps;
      }
    }
  }

  return lps;
};
