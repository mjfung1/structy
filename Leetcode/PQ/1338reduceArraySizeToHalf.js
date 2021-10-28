
// 1338. Reduce Array Size to The Half
// time: O(n);
// space: O(n);

var minSetSize = function(arr) {
    const freq = {};
    for (let num of arr) freq[num] = ++freq[num] || 1;
    
    const maxpq = new MaxPriorityQueue();
    for (let num in freq) {
        maxpq.enqueue(freq[num], freq[num]);
    }
    
    let size = arr.length / 2;
    
    let output = 0;
    while (size > 0) {
        let { priority, element } = maxpq.dequeue();
        size -= priority;
        output++;
    }
    
    return output;
};