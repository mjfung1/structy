
// 1274. Number of Ships in a Rectangle


// divide and conquer BY 4 quadrants;
// call hasShip on quadrants. if has no ship can stop searching on that quadrant;
var countShips = function(sea, topRight, bottomLeft) {
    let [topY, rightX] = topRight;
    let [bottomY, leftX] = bottomLeft;
    
    if (!sea.hasShips(topRight, bottomLeft)) return 0;
    // if doesnt hit case above - means we have ship - keep traversing/dividing;
    if (topY === bottomY && rightX === leftX) return 1;
    
    let midX = Math.floor((rightX + leftX) / 2);
    let midY = Math.floor((bottomY + topY) / 2);
    
    
    let numShips = 0;
    
    numShips += countShips(sea, [midY, midX], bottomLeft);
    numShips += countShips(sea, [midY, rightX], [bottomY, midX + 1]);
    numShips += countShips(sea, [topY, midX], [midY + 1, leftX]);
    numShips += countShips(sea, topRight, [midY + 1, midX + 1]);
    
    return numShips;
    
};