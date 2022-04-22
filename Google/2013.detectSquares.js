
// 2013. Detect Squares

// trick to this problem
// if valid diagonal is found. check for the 2 other points. and multiply their quantities
// what is a valid diagonal
// when abs(x - px) === abs(y - py) as long as x != px or y != py


DetectSquares.prototype.add = function(point) {
    const [x, y] = point;
    let key = x + ',' + y;
    
    if (!(key in this.points)) this.points[key] = 0;
    this.points[key]++;
};

/** 
 * @param {number[]} point
 * @return {number}
 */
DetectSquares.prototype.count = function(point) {
    let count = 0;
    let [x, y] = point;
    
    for (let key of Object.keys(this.points)) {
        let [px, py] = key.split(',');
        // px = Number(px);
        // py = Number(py);
        
        // if diff of (x - px )and (y - py), not valid square
        // square must have positive area.  
        // if x == px or y == py that means point on top of each other
        if ((Math.abs(x - px) !== Math.abs(y - py)) || (x == px) || (y == py)) {
            continue;
        }
        
        let point1 = x + ',' + py;
        let point2 = px + ',' + y;
        // if we dont hit continue, that means we found valid diagonal;
        if ((point1 in this.points) && (point2 in this.points)) {
            count += this.points[key] * this.points[point1] * this.points[point2];
        }
    }
    
    
    return count;
};
