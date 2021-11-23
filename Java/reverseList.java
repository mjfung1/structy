package Java;

// 206. Reverse Linked List

public class ListNode {
     int val;
     ListNode next;
     ListNode() {}
     ListNode(int val) { this.val = val; }
     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
}

class reverseList {
    public ListNode main(ListNode head) {

        ListNode prev = null;

        while (head != null) {

            ListNode temp = head.next;
            head.next = prev;
            prev = head;
            head = temp;
        }

        return prev;
    }
}