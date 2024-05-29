import { SinglyNodeNum } from './SinglyNodeNum';

export class LinkListNum {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * @param {SinglyNodeNum} node 
   */
  append(node) {
    if (this.head === null) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next !== null) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
  }

  /**
   * @param {number} value 
   */
  appendValue(value) {
    this.append(new SinglyNodeNum(value));
  }
}