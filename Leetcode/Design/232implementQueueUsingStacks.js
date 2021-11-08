

// 232. Implement Queue using Stacks


var MyQueue = function() {
    this.stack1 = [];
    this.stack2 = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    let stack1 = this.stack1;
    let stack2 = this.stack2;
    
    // before adding to stack1.
    // empty it first and add to another stack
    while (stack1.length) {
        let ele = stack1.pop();
        stack2.push(ele);
    }
    
    // push latest to stack1
    stack1.push(x);
    
    
    // ;
    while (stack2.length) {
        let ele = stack2.pop();
        stack1.push(ele);
    }
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let stack1 = this.stack1;
    return stack1.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack1[this.stack1.length - 1];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack1.length === 0;
};
