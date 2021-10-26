// Write a function 'fib(n)' that takes in a number as an argument.
// The function should return the nth number of the fib sequence.

// The 0th number of the sequence is 0.
// The 1st number of the sequence is 1.

// To generate the next number of the sequence, we sum the previous two.

// time: O(n);
// space: O(n);
const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;

    // console.log(table);

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    // console.log(table);
    return table[n]
};

console.log(fib(3)) // 2
console.log(fib(4)) // 3
console.log(fib(5)) // 5
console.log(fib(6)) // 8
console.log(fib(7)) // 13
console.log(fib(8)) // 21
console.log(fib(9)) // 34
console.log(fib(50)) // 12586269025


