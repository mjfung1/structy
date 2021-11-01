const frequencer = (string) => {
    let freq = {};
    let freq1 = {};

    for (let char of string) {
        freq[char] = freq[char] += 1 || 1;
         console.log(freq, 'freq');
        freq1[char] = ++freq1[char] || 1;
    }
    // console.log(freq1, '11');
    // console.log(freq, 'freq');
};

frequencer('sssssffffdddd')