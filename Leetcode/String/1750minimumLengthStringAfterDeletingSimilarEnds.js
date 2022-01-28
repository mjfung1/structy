// 1750. Minimum Length of String After Deleting Similar Ends

var minimumLength = function(s) {
    let start = 0;
    let end = s.length - 1;
    
    while (start < end) {
        let prefix = s[start];
        let suffix = s[end];
        
        if (prefix !== suffix) break;
        
        while (start + 1 < end && s[start] === s[start + 1]) {
            start++;
        }
        while (start < end - 1 && s[end] === s[end - 1]) {
            end--;
        }
        start++;
        end--;
    }
    
    return end - start + 1;
};