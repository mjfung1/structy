
// 205. Isomorphic Strings

var isIsomorphic = function(s, t) {
    let sIndex = {};
    let tIndex = {};
    
    // assuming both same length
    for (let i = 0; i < s.length; i++) {
        let sChar = s[i];
        let tChar = t[i];
    
        if (!sIndex[sChar]) sIndex[sChar] = '';
        if (!tIndex[tChar]) tIndex[tChar] = '';
        
        sIndex[sChar]+= i;
        tIndex[tChar]+= i;
    }
    
    let length = Math.max(s.length, t.length);
    
    for (let i = 0; i < length; i++) {
        let charS = s[i];
        let charT = t[i];
        
        if (sIndex[charS] !== tIndex[charT]) return false;
    }
    
    return true;
};