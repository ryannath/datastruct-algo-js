class TrieNode {
  constructor() {
    this.children = {};
    this.terminal = false;
  }

  /**
   *
   * @param {string} word
   */
  insert(word) {
    let temp = this;
    for (let i = 0; i < word.length; i++) {
      if (!(word[i] in temp.children)) {
        temp.children[word[i]] = new TrieNode();
      }
      temp = temp.children[word[i]];
    }
    if (temp.terminal) {
      return false;
    }
    temp.terminal = true;
    return true;
  }

  printTrieRecur(node, prefix) {
    if (node.terminal === true) {
      console.log('WORD: ' + prefix);
    }
    for (const key of Object.keys(node.children).sort()) {
      node.printTrieRecur(node.children[key], prefix + key);
    }
  }

  printTrie() {
    for (const key of Object.keys(this.children).sort()) {
      this.printTrieRecur(this.children[key], key);
    }
  }

  search(searchWord) {
    let curr = this;
    for (let i = 0; i < searchWord.length; i++) {
      if (!(searchWord[i] in curr.children)) {
        return false;
      }
      curr = curr.children[searchWord[i]];
    }
    return curr.terminal;
  }

  deleteRecur(node, word, wordIndex) {
    if (wordIndex === word.length) {
      if (node.terminal) {
        node.terminal = false;
        return [
          true,
          Object.keys(node.children).length === 0 && !node.terminal,
        ];
      } else {
        // Node was not found
        return [
          false,
          Object.keys(node.children).length === 0 && !node.terminal,
        ];
      }
    }
    if (word[wordIndex] in node.children) {
      const [wasFound, hasNoChild] = node.children[word[wordIndex]].deleteRecur(
        node.children[word[wordIndex]],
        word,
        wordIndex + 1
      );
      if (wasFound === true) {
        if (hasNoChild === true) {
          delete node.children[word[wordIndex]];
        }
        return [
          true,
          Object.keys(node.children).length === 0 && !node.terminal,
        ];
      }
    }
    return [false, Object.keys(node.children).length === 0 && !node.terminal];
  }

  delete(word) {
    if (word.length < 0 || !(word[0] in this.children)) {
      // Failed to delete, no keys match
      return false;
    }

    const [wasFound, hasNoChild] = this.deleteRecur(
      this.children[word[0]],
      word,
      1
    );
    if (wasFound && hasNoChild) {
      delete this.children[word[0]];
    }
    return [wasFound, Object.keys(this.children).length === 0];
  }
}

function main() {
  const t1 = new TrieNode();
  t1.insert('A');
  t1.insert('CAT');
  t1.insert('CATTLE');
  t1.insert('KIN');
  t1.insert('KIT');
  t1.insert('HAPPY');
  t1.insert('Abbey');
  t1.insert('Abalone');

  console.log(t1.delete('KI'));
  console.log(t1.delete('CAT'));
  // console.log(t1.delete('CATTLE'));
  t1.printTrie();
  // True
  console.log(t1.search('KIT'));
  // False
  console.log(t1.search('KITTEN'));
}
main();
