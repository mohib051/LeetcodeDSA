/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    let size = 0;
    let temp = head;
    while(temp !=null){
        size++;
        temp = temp.next;
    }
    let ans = 0;
    temp = head;
    while(temp != null){
        ans = ans+(Math.pow(2,size-1) * temp.val)
        size--;
        temp = temp.next
    }
    return ans 
};