

// 929. Unique Email Addresses

var numUniqueEmails = function(emails) {
    let diff = new Set();
    for (let email of emails) {
        const [before, after] = email.split('@');
     
        let beforeAt = processBefore(before);
        
        let processed = beforeAt + '@' + after;
        diff.add(processed);
    }
    return diff.size;
};

const processBefore = (string) => {
    let output = [];
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        if (char === '+') break;
        if (char !== '.') output.push(char);
    }
    
    return output.join('');
};