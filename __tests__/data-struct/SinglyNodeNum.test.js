import { SinglyNodeNum } from '../../src/data-struct/SinglyNodeNum'

describe ('SinglyNodeNum', () => {
  describe('constructor()', ()=> {
    describe('given a valid initial value', () => {
      it('should create a Node', () => {
        const node = new SinglyNodeNum(32);
        expect(node).toBeInstanceOf(SinglyNodeNum);
      })
      it ('node should contain the given value', () => {
        const node = new SinglyNodeNum(18);
        expect(node.value).toBe(18);
      });
      it ('next property should be null', () => {
        const node = new SinglyNodeNum(18);
        expect(node.next).toBeNull();
      })
    })
  })
})
