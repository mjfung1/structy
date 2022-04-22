


// 539. Minimum Time Difference

// using sorting. 
// time: O(nlogn);
var findMinDifference = function(timePoints) {
    let timeInMinutes = [];
    
    for (let timePoint of timePoints) {
        let [hour, min] = timePoint.split(':');
        hour = parseInt(hour);
        min = parseInt(min);
        
        let convertedTime = hour * 60 + min;
        timeInMinutes.push(convertedTime);
    }
    
    timeInMinutes.sort((a,b) => a-b);
    
    let min = 1440 + timeInMinutes[0] - timeInMinutes[timeInMinutes.length - 1];
    
    for (let i = 1; i < timeInMinutes.length; i++) {
        let diff = timeInMinutes[i] - timeInMinutes[i - 1];
        if (diff === 0) return 0;
        min = Math.min(min, diff);
    }
    
    return min;
};


// ----------------------------------
// bucket sort
var findMinDifference = function(timePoints) {
    let timeInMinutes = new Array(24 * 60);
    
    for (let timePoint of timePoints) {
        let [hour, min] = timePoint.split(':');
        hour = parseInt(hour);
        min = parseInt(min);
        
        let convertedTime = hour * 60 + min;
        
        // if previously seen - best time;
        if (timeInMinutes[convertedTime]) return 0;
        timeInMinutes[convertedTime] = true;
    }
    
    let min = Infinity;
    let first = -1;
    let prev = -1;
    let curr = -1;
    
    for (let i = 0; i < timeInMinutes.length; i++) {
        if (timeInMinutes[i] === undefined) continue;
        
        
        if (prev === -1) {
            prev = i;
            first = i;
        } else {
            curr = i;
            min = Math.min(min, curr - prev);
            prev = curr;
        }
    }
    
    return Math.min(min, 1440 + first - curr);
};