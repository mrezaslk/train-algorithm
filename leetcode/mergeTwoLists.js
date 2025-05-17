/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //   let concatList = []
  //   if (list1.length > 0 && list2.length > 0) {
  //     concatList = [...list1, ...list2].sort((a, b) => a - b);
  //   }
  let dummyHead = { val: -1, next: null };
  let current = dummyHead;
  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }
  return dummyHead.next;
};

let list1 = [1, 2, 4];
let list2 = [1, 3, 4];
mergeTwoLists(list1, list2);
