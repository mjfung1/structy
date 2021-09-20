
# 12. Integer to Roman


class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
        letters = ['I', 'IV', 'V', 'IX', 'X', 'XL',
                   'L', 'XC', 'C', 'CD', 'D', 'CM', 'M']

        output = []
        start = len(numbers)-1
        while num > 0:
            while numbers[start] <= num:
                output.append(letters[start])
                num -= numbers[start]
            start -= 1
        return ''.join(output)
