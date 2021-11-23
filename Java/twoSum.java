package Java;

import java.util.HashMap;

public class twoSum {
    public int[] main(int[] nums, int target) {
        HashMap <Integer, Integer> freq = new HashMap();

        for (int i = 0; i < nums.length; i++) {
            int needed = target - nums[i];

            if (freq.containsKey(needed)) {
                return new int[] { freq.get(needed), i };
            }

            freq.put(nums[i], i);

        }

        // System.out.println(freq);
        return null;
    }
}
