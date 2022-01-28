// 1309. Decrypt String from Alphabet to Integer Mapping

var freqAlphabets = function(s) {
    const alpha = 'abcdefghijklmnopqrstuvwxyz';
    let i = 0;
    let j = i + 2;
    
    const output = [];
    
    while (i < s.length) {
        let num;
        if (s[j] === '#') {
            num = Number(s.slice(i, j));
            i = j + 1;
        } else {
            num = Number(s[i]);
            i += 1;
        }
        j = i + 2;
        output.push( alpha[ num - 1 ] );
        
    }
    
    return output.join('');
};