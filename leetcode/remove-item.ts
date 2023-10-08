/**
  This func will tell us the number of unique values in an array.
  We do this by looping the array, looking for nums that != val
  Then moving them to the beginning of the array.
 */
function removeElement(nums: number[], val: number): number {
  // Store k as a pointer.
  let k = 0;
  // Loop the array
  for (let i = 0; i < nums.length; i++) {
    // If the item looped is not equal to val
    if (nums[i] !== val) {
      // Set the value of num at k to the current num.
      // K is essentially the last known index to reassign a value to.
      // As we loop, k is confirmed to not be equal to val. so we are safe to replace.
      nums[k] = nums[i];
      // We increment K each time, we know that prev elements wont be overridden
      // Since we are doing in an inline replace when we do find matching elems.
      k++;
    }
  }
  return k;
}
