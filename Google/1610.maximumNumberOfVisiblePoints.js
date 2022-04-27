

// 1610. Maximum Number of Visible Points
// get angle where i see point. turn all points to angle i see point
// sort angle array
// make circular array by concatenating each value + 360
// sliding window for sorted angles.
// see how big window can make without going over angle limit
// find max

// also pay attention points located on origin.
// these can be added automatically
var visiblePoints = function(points, angle, location) {
    
    const angles = [];
    let pointsOnOrigin = 0;
    
    for (let point of points) {
        const [x, y] = point;
        const [lx, ly] = location;
        
        
        
        // find diff
        let dx = x - lx;
        let dy = y - ly;
        
        if (dx === 0 && dy === 0) {
            pointsOnOrigin++;
        } else {
            const originToPointAngle = getAngle(dy, dx);
    
            angles.push(originToPointAngle);
        }
        

        
    }
    angles.sort((a,b) => a-b);
    
    // make angle circular by adding 360. have neg values.
    let circularAngles = [...angles]
        
    angles.forEach(angle => circularAngles.push(angle + 360));


    
    let j = 0;
    let max = 0;
    
    
    for (let i = 0; i < circularAngles.length; i++) {
        while (circularAngles[i] - circularAngles[j] > angle) {
            // j lags behind
            j++;
        }
       
        // if gets to this state
        // means window is than angle
        max = Math.max(max, i - j + 1);
    }
    
    return max + pointsOnOrigin;
};