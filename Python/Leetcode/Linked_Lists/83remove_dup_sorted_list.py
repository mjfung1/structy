
# 83. Remove Duplicates from Sorted List

# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# Leetcode 203.  Compare them
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev = head
        current = head

        while current:
            if prev.val == current.val:
                prev.next = current.next
            else:
                prev = prev.next

            current = current.next

        return head
