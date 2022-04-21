
// 818. Race Car

// SIMPLE BFS.  
// MAIN POINT.
// ONLY REVERSE DIRECTION IF MOVING AWAY FROM TARGET. OR PASSING TARGET IN NEXT MOVE

var racecar = function(target) {
    const queue = new Queue();
    queue.enqueue([ 0, 0, 1 ]);
    
    while (queue.size()) {
        const [ moves, pos, speed ] = queue.dequeue();
        
        if (pos === target) return moves;
        
        // might no need it
        // avoid integer overflow - stop whenever we've passed twice the magnitude of target.
        // if (Math.abs(pos) > 2 * target) continue;
        
        // always consider moving the in forward direction
        queue.enqueue( [ moves + 1, pos + speed, 2 * speed] );
        
        // THIS IS THE KEY OF IT ALL
        // ONLY consider Reverse direction of car if one of following conditions
        // 1. car is driving away for target
        // 2. car will pass target in next move.
        if ( (pos + speed > target && speed > 0) || (pos + speed < target && speed < 0) ) {
            let nextSpeed = speed > 0 ? -1 : 1
            queue.enqueue( [ moves + 1, pos, nextSpeed ]);
        }
    }
    
};