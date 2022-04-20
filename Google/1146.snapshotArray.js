

// 1146. Snapshot Array


/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.arr = new Array;
    this.index = -1;
    this.snapshot = new Map;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index] = val;
   
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    this.index += 1;
    // the trick is to NOT initialized array with size. 
    // A lot of wasted space. Smaller array
    this.snapshot.set(this.index, [ ...this.arr ]);
    return this.index;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let subarr = this.snapshot.get(snap_id);
    let ele = subarr[index];
    return ele === undefined ? 0 : ele;
};