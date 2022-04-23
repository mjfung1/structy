
// 2034. Stock Price Fluctuation
// use minheap to keep track of min
// use maxheap to keep track of max


var StockPrice = function() {
    this.hash = {};
    this.minpq = new MinPriorityQueue();
    this.maxpq = new MaxPriorityQueue();
    this.latest = 0;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.hash[timestamp] = price;
    
    this.minpq.enqueue( timestamp, price );
    this.maxpq.enqueue( timestamp, price );
    
    if (timestamp > this.latest) this.latest = timestamp;
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.hash[this.latest];
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    let { element, priority } = this.maxpq.front();
    
    // if element's priority(value) !== its value in the hash dequeue
    // it is invalid - not updated;
    while (priority !== this.hash[element]) {
        this.maxpq.dequeue();
        
        element = this.maxpq.front().element;
        priority = this.maxpq.front().priority;
    }
    
    return priority;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    let { element, priority } = this.minpq.front();
    
    
    while (priority !== this.hash[element]) {
        this.minpq.dequeue();
        
        element = this.minpq.front().element;
        priority = this.minpq.front().priority;
    }
    
    return priority;
};