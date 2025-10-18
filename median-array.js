Array1 = [1, 2, 3, 4];
Arary2 = [5, 6, 7, 8];

function findMedianSortedArrays(nums1, nums2) {
  let combined_array = nums1.concat(nums2);
  sorted_Array = combined_array.sort((a, b) => a - b);
  let length_array = sorted_Array.length;
  mid_value = length_array / 2;
  if (length_array % 2 === 0) {
    console.log(
      `${(sorted_Array[mid_value - 1] + sorted_Array[mid_value]) / 2}`
    );
  } else {
    console.log(`${sorted_Array[Math.floor(mid_value)]}`);
  }
}
findMedianSortedArrays(Array1, Arary2);
