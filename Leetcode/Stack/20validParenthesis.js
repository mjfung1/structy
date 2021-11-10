
// 20. Valid Parentheses


var isValid = function(s) {
    let brackets = {'{': '}', '(':')', '[':']'};
    const stack = [];
    
    for (let char of s) {
        if (char in brackets) {
            stack.push(char);
        } else {
            let open = stack.pop();
            if (brackets[open] !== char) return false; 
        }
    } 
    
    return stack.length === 0;
};