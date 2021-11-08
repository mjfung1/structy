
// 146. LRU Cache


var LRUCache = function(capacity) {
    this.capacity = capacity;
    // use map bc insert order;
    this.cache = new Map();
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let cache = this.cache;
    if (!(cache.has(key))) {
        return -1;
    } else {
        let value = cache.get(key);
        cache.delete(key);
        cache.set(key, value);
        return value;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let cache = this.cache;
    
    // to reset order;
    cache.delete(key);
    cache.set(key, value);
    
    if (cache.size > this.capacity) {
        let first = cache.keys().next().value;
        cache.delete(first);
    }
    
};