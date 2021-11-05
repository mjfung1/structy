

var invalidTransactions = function(transactions) {
    let invalid = [];
    let hash = {};
    
    // store info in hash for easy access;
    for (let transaction of transactions) {
        let [name, time, amount, city] = transaction.split(',');
        
        if (!(name in hash)) {
            hash[name] = [ { amount, city, time } ];
        } else {
            hash[name].push( { amount, city, time } );
        }
    }
    
    
    // iterate again for comparison and validity;
    for (let transaction of transactions) { 
        if (isInvalid(transaction, hash) === true) {
            invalid.push(transaction);
        }
    }
    
    return invalid;
};

const isInvalid = (transaction, hash) => {
    let [name, time, amount, city] = transaction.split(',');
    
    if (amount > 1000) return true;
    
    let attributes = hash[name];
    for (let attribute of attributes) {
        if (city !== attribute.city && Math.abs(time - attribute.time) <= 60) {
            return true;
        }
    }
    
    return false;
};