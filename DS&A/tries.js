

class Node {
    constructor() {
        this.children = {};
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new Node();
    }

    insertRecur(word, root=this.root) {
        let letter = word[0];
        
        if (!(letter in root.children)) root.children[letter] = new Node();

        if (word.length === 1) {
            root.children[letter].isTerminal = true;
        } else {
            this.insertRecur(word.slice(1), root.children[letter]);
        }
    }

    insertIter(word) {
        let node = this.root;

        for (let letter of word) {
            if (!(letter in node.children)) {
                node.children[letter] = new Node();
            }
            node = node.children[letter];
        }

        node.isTerminal = true;
    }

    searchRecur(word, root=this.root) {
        let letter = word[0];

        if (word.length === 0) {
            return root.isTerminal;
        }

        if (!(letter in root.children)) {
            return false;
        } else {
            return this.searchRecur(word.slice(1), root.children[letter]);
        }

    }

    searchIter(word) {
        let node = this.root;

        for (let letter of word) {
            if (!(letter in node.children)) {
                return false;
            }

            node = node.children[letter];
        }

        return node.isTerminal;
    }

    // wordsWithPrefix(prefix, root=this.root) {
    //     if (prefix.length === 0) {

    //         let allWords = [];
    //         if (root.isTerminal) allWords.push('');

    //         for (let letter in root.children) {
    //             let child = root.children[letter]
    //             let suffixes = this.wordsWithPrefix(prefix, child);

    //             for (let suffix of suffixes) {
    //                 allWords.push( letter + suffix );
    //             }
    //         }
    //         return allWords;
    //     } else {
    //         let letter = prefix[0];
    //         let child = root.children[letter];

    //         if (child === undefined) {
    //             return [];
    //         } else {
    //             let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
    //             let words = []
    //             for (let suffix of suffixes) {
    //                 words.push( letter + suffix )
    //             }
    //             return words;
    //         }
    //     }
    // }

    wordsWithPrefix(prefix, root=this.root) {
        if (!prefix) {
            const allWords = [];
            if (root.isTerminal) allWords.push('');

            for (let letter in root.children) {
                let child = root.children[letter];
                let suffixes = this.wordsWithPrefix(prefix, child);

                for (let suffix of suffixes) {
                    allWords.push( letter + suffix );
                }
            }

            return allWords;
        } else {
            let letter = prefix[0];
            if (!(letter in root.children)) return [];

            let child = root.children[letter];
            let suffixes = this.wordsWithPrefix(prefix.slice(1), child);
            return suffixes.map(suffix => letter + suffix);
        }
    }
}