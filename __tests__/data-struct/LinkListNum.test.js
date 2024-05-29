import { LinkListNum } from '../../src/data-struct/LinkListNum';
import { SinglyNodeNum } from '../../src/data-struct/SinglyNodeNum';

describe('LinkListNum', () => {
  describe('constructor()', () => {
    it('creates an empty list', () => {
      const list = new LinkListNum();
      expect(list.head).toBeNull();
      expect(list.size).toBe(0);
    });
  });
  describe('append()', () => {
    describe('when the list is empty', () => {
      it('should add the node as the head of the list', () => {
        const list = new LinkListNum();
        expect(list.head).toBeNull();
        expect(list.size).toBe(0);

        list.append(new SinglyNodeNum(0));
        expect(list.head).not.toBeNull();
        expect(list.head.value).toBe(0);
        expect(list.head.next).toBeNull();
      });
    });
  });
});
