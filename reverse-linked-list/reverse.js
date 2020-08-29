const node = require('../lib/node');
const makeList = node.makeList;
const print = node.print;

function reverse(c, top) {

    if (c.next === null) {
        top = c;
        return [c, top];
    }
    let newC = reverse(c.next, top);
    newC[0].next = c;
    top = newC[1];
    c.next = null;
    return [c, top];
}

let head = makeList([1, 2, 3, 4]);
let c = head;
reverse(c, head);
print(head);