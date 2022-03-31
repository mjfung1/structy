

// 22. Generate Parentheses

var generateParenthesis = function(n) {
    const combos = [];
    
    const rec = ( n, diff, combo, combos) => {
        if (diff < 0) return;
        
        if (n === 0) {
            if (diff === 0) {
                combos.push(combo.join(''));
            }
        } else {
            combo.push('(');
            rec( n - 1, diff + 1, combo, combos);
            combo.pop();
            
            combo.push(')');
            rec( n - 1, diff - 1, combo, combos);
            combo.pop();
            
        }
        
        
    };
    
    rec( 2 * n, 0, '', combos);
    
    return combos;
};