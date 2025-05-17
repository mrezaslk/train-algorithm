// list1: 1 → 3 → 4
// let list1 = {
//   val: 1,
//   next: {
//     val: 3,
//     next: {
//       val: 4,
//       next: null,
//     },
//   },
// };

// // list2: 2 → 5
// let list2 = {
//   val: 2,
//   next: {
//     val: 5,
//     next: null,
//   },
// };

// let current = list2;
// while (current !== null) {
//   current = current.next;
// }

// merge two linked list together

let list1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
};

// تعریف list2: 2 → 5
let list2 = {
  val: 2,
  next: {
    val: 5,
    next: null
  }
};

function mergeTwoLinkedList(list1, list2) {
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
}

let mergedLis = mergeTwoLinkedList(list1, list2);

let current = mergedLis;
while (current !== null) {
  console.log(current.val);
  current = current.next;
}
