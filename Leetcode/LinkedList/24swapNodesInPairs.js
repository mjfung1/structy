
// 24. Swap Nodes in Pairs


var swapPairs = function(head) {
    let dummyHead = new ListNode(0, head);
    let previousNode = dummyHead;
    let currentNode = head;
    
    // as long as I have a node and node.next, I can do swaps.
    // if single node left, no swaps made.
    while (currentNode && currentNode.next) {
        // store variables;
        let nextPairOfNodes = currentNode.next.next;
        let secondNode = currentNode.next;
        
        // do swaps
        previousNode.next = secondNode;
        secondNode.next = currentNode;
        currentNode.next = nextPairOfNodes;
        
        // reassign pointers;
        previousNode = currentNode;
        currentNode = nextPairOfNodes;
    }
    
    return dummyHead.next;
};



// dummy -> 1 -> 2 -> 3 -> 4 -> null

// step1
// dummy -> 2 -> 1 -> 3 -> 4 -> null;


// step2
// dummy -> 2 -> 1 -> 4 -> 3 -> null;