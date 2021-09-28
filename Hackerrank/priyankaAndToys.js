// Priyanka and Toys

function toys(w) {
    // Write your code here
    w.sort((a,b) => b-a);
    let count = 0;
    
    while (w.length) {
        let sum = w.pop() + 4;
        
        while (w.length) {
            if (w[w.length-1] <= sum) w.pop();
            else break;
        }
        count++;
    }
    return count;
}
