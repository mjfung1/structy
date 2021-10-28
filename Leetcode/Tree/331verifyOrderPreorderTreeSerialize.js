
// 331. Verify Preorder Serialization of a Binary Tree

var isValidSerialization = function(preorder) {
    const array = preorder.split(',');
 
    let slots = 1;
    
    for (let ele of array) {
        slots--;
        
        if (slots < 0) return false;
        
        if (ele !== '#') slots += 2;
    }
  
    return slots === 0;
    
};

