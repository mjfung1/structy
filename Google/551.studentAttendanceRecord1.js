

// 551. Student Attendance Record I

var checkRecord = function(s) {
    
    let hash = {};
    
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        if (char === 'A') {
            hash[char] = ++hash[char] || 1;
            if (hash[char] === 2) return false;
        }
        
        if (char === 'L') {
            let nextChar1 = s[i+1];
            let nextChar2 = s[i+2];
            
            if (char === nextChar1 && char === nextChar2) return false;
        }
        
    }
    
    return true;
};