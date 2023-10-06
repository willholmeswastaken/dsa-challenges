function removeDuplicates(nums: number[]): number {
  // Setup a left pointer to keep track of the unique elements
  let left = 1;
  // Loop through the array starting at index 1, since 0 will always be unique the array is always asc
  for (let right = 1; right < nums.length; right++) {
    // If the current element is not equal to the previous element
    if (nums[right - 1] !== nums[right]) {
      // Set the left pointer to the current element
      nums[left] = nums[right];
      // Increment the left pointer
      left++;
    }
  }
  // Return the left pointer
  return left;
}
