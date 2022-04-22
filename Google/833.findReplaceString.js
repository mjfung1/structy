
// 833. Find And Replace in String

var findReplaceString = function(s, indices, sources, targets) {
    let n = s.length;
    let isMatch = new Array(n).fill(-1);
    
    
    for (let i = 0; i < indices.length; i++) {
        let index = indices[i];
        let source = sources[i];
        
        // if there is a substring - mark index
        let substring = s.slice(index, index + source.length);

        if (substring === source) {
            // find out why it's set to i;
            let indexFoundInSourcesAndTargets = i;
            // at the index where substring is,
            //    mark where it's found in the targets and sources arrays
            isMatch[index] = indexFoundInSourcesAndTargets;
        }
    }
    
    let i = 0;
    const output = [];
    while (i < n) {
        if (isMatch[i] !== -1) {
            let indexWhereTargetIsLocated = isMatch[i];
            output.push(targets[indexWhereTargetIsLocated]);
            // increase i by length of substring(or sources);
            i += sources[indexWhereTargetIsLocated].length;
        } else {
            output.push(s[i]);
            i++;
        }
    }
    
    return output.join('');
};