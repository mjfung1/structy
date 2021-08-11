
// 1422. Maximum Score After Splitting a String


var maxScore = function(s) {
    let max = 0;
    for (let i = 0; i < s.length - 1; i++) {
        let left = s.slice(0, i+1);
        let right = s.slice(i+1);
        
        let zeroes = 0;
        for (let num of left) if (num === '0') zeroes++;
        
        let ones = 0;
        for (let num of right) if (num === '1') ones++;
    
        max = Math.max( max, zeroes + ones ); 
    }
    
    return max;
};


    