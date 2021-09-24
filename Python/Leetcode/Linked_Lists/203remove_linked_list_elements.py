# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

# 203. Remove Linked List Elements

class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        dummy_head = ListNode(None, head)
        prev = dummy_head
        current = head

        while current:
            # if same val => prev stays but keeps grabbing current's next
            if current.val == val:
                prev.next = current.next
            else:
            # if not same val => can move prev up
                prev = prev.next

            # current always move up
            current = current.next

        return dummy_head.next
