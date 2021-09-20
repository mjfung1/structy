
# 13. Roman to Integer

class Solution:
    def romanToInt(self, s: str) -> int:

        symbols = {
            'I': 1, 'V': 5, 'X': 10, 'L': 50, 'C': 100, 'D': 500, 'M': 1000
        }

        result = 0

        for index in range(len(s)):
            if index + 1 < len(s) and symbols[s[index]] < symbols[s[index + 1]]:
                result -= symbols[s[index]]
            else:
                result += symbols[s[index]]

        return result
