

var findWords = function(board, words) {
  const res = [], trie = {};
  for (let word of words) {
    let curNode = trie;
    for (let char of word) (curNode = curNode[char] = curNode[char] || {});
    curNode.end = word;
  }
  
  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      if (trie[board[row][col]]) traverse(row, col);
    }
  }
  
  return res;
  
  function traverse(row, col, node = trie) {
    if (!board[row][col]) return;
    
    const char = board[row][col], curNode = node[char];
    if (!curNode) return;
    
    if (curNode.end) {
      res.push(curNode.end);
      curNode.end = null;
    }
    
    board[row][col] = 0;
    (col - 1 >= 0) && traverse(row, col - 1, curNode);
    (col + 1 < board[row].length) && traverse(row, col + 1, curNode);
    (row - 1 >= 0) && traverse(row - 1, col, curNode);
    (row + 1 < board.length) && traverse(row + 1, col, curNode);
    board[row][col] = char;
  }
};




// -----------------
var findWords = function(board, words) {
    let trieTree = buildTrie(words);
    let res = []
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            search(trieTree, i, j, board, res)
        }
    }
    return res;
    
};

var buildTrie = function(words) {
    let root = {};
    for (let i = 0; i < words.length; i++) {
        let node = root;
        for (let j = 0; j < words[i].length; j++) {
            const char = words[i][j];
            if (node[char] == null) {
                node[char] = {}
            }
            node = node[char]
        }
        node.word = words[i];
    }
    return root;
}

var search = function(root, x, y, board, res) {
    if (root.word != null) {
        res.push(root.word);
        root.word = null;
    }
    
    if (x < 0 || y < 0 || x >= board.length || y >= board[0].length || root[board[x][y]] == null) {
        return;
    }
    const lastFoundLetter = board[x][y];
    board[x][y] = "#";
    
    search(root[lastFoundLetter], x-1, y, board, res)
    search(root[lastFoundLetter], x, y+1, board, res)
    search(root[lastFoundLetter], x+1, y, board, res)
    search(root[lastFoundLetter], x, y-1, board, res)
    
    board[x][y] = lastFoundLetter;   
}



// ------------------------------------
class Trie {
  constructor(words) {
    this.root = { isTerminal: false, idx: null };
    this.buildTrie(words);
  }
 
  buildTrie(words) {
    words.forEach((word, idx) => {
      this.insert(word, idx);
    });
  }
 
  insert(word, idx) {
    let root = this.root;
   
    for (let i = 0; i < word.length; i++) {
      const char = word[i];
      if (!(char in root)) root[char] = { isTerminal: false, idx: null };
 
      root = root[char];
    }
 
    root.isTerminal = true;
    root.idx = idx;
  }
}
 
 
// can board contain same word more than once? store matching word to set!
function findWords(board, words) {
  const trie = new Trie(words).root;
  const matches = new Set();
 
  for (i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] in trie && matches.size < words.length) {
        dfs(board, words, trie, matches, i, j);
      }
    }
  }
 
  return Array.from(matches);
}
 
function inBounds(a, i, j) {
  return i >= 0 && j >= 0 && i < a.length && j < a[i].length;
}
 
// check if isTerminal before !inBounds because it could be out of bounds
// but isTerminal has higher precedence!
// mutate board before recursive call and backtrack after recurse to not reuse same cell
 
function dfs(board, words, trie, matches, i, j) {
  if (trie.isTerminal) matches.add(words[trie.idx]);    
  if (!inBounds(board, i, j)) return;
 
  const char = board[i][j];
  if (!(char in trie)) return;
  board[i][j] = true;
 
  dfs(board, words, trie[char], matches, i + 1, j);
  dfs(board, words, trie[char], matches, i - 1, j);
  dfs(board, words, trie[char], matches, i, j + 1);
  dfs(board, words, trie[char], matches, i, j - 1);
 
  board[i][j] = char;
}



// ---------------------------

class TrieNode {
    constructor() {
        this.children = {}
        this.word = null
    }
}

var buildTrie = function(words) {
    const root = new TrieNode();
    
    words.forEach(w => {
        let node = root;
        
        for (let i = 0; i < w.length; i++) {
            let c = w[i];
            
            if (!node.children[c]) { 
                node.children[c] = new TrieNode();
            }
            node = node.children[c];
        }
        node.word = w;
    });
    console.log('root', root);
    return root;
}

var findWords = function(board, words) {
    const res = [];
    if (!board || !words || board.length < 1) return [];
 
    // build our trie
    const trie = buildTrie(words);
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            dfs(board, i, j, trie, res);
        }
    }
     
    return res;
};

var dfs = function(board, row, col, trie, res) {
    if (row < 0 || col < 0 || row >= board.length || col >= board[0].length) return;

    const temp = board[row][col];
    
    if (!trie.children[temp]) return;
    
    trie = trie.children[temp]
    
    if (trie.word) {
        res.push(trie.word)
        trie.word = null
    }
    
    board[row][col] = '#';
    
    dfs(board, row - 1, col, trie, res); 
    dfs(board, row, col - 1, trie, res);
    dfs(board, row + 1, col, trie, res); 
    dfs(board, row, col + 1, trie, res); 
    
    board[row][col] = temp;
};

