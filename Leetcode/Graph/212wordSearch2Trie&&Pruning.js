


var findWords = function(board, words) {
    let node = new Trie();
    let trie = trieBuilder(words, node);
    const output = [];
    console.log(trie.root)
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            // remember to pass in trie.ROOT - parent.  trie starts with a root
            dfs(row, col, board, trie.root, output, trie.root);
        }
    }
    return output;
};


const dfs = (row, col, board, trie, output, parentTrie) => {
    if (row < 0 || row === board.length || col < 0 || col === board[0].length) return;
    
    let char = board[row][col];

    if (char in trie.children === false) return;
        
    
    trie = trie.children[char];
    
    if (trie.isWord) {
        output.push(trie.isWord);
        let toDelete = parentTrie;
        
        // if word => trie pruning.
        // once char count reaches zero we can delete;
        for (let char of trie.isWord) {
            toDelete.children[char].count--;
            
            if (toDelete.children[char].count === 0) {
                delete toDelete.children[char];
                break;
            }
            
            toDelete = toDelete.children[char];
        }
        
        trie.isWord = null;
    }
    
    
    board[row][col] = '#'
    
    dfs(row+1, col, board, trie, output, parentTrie);
    dfs(row-1, col, board, trie, output, parentTrie);
    dfs(row, col+1, board, trie, output, parentTrie);
    dfs(row, col-1, board, trie, output, parentTrie);
    
    board[row][col] = char;

};

const trieBuilder = (words, trie) => {
    let current = trie;
    for (word of words) {
        current.insert(word);
    }
    return trie;
}

class Node {
    constructor() {
        this.children = {};
        this.isWord = null;
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }
    insert(word) {
        let current = this.root;
        for (let char of word) {
            if (char in current.children === false) {
                current.children[char] = new Node();
            }
            current.children[char].count++;
            current = current.children[char];
        }
        current.isWord = word;
    }
}
