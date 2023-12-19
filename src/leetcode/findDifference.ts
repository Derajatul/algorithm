function findDifference(nums1: number[], nums2: number[]): number[][] {
  let include1: number[] = nums1.filter((v, i) => !nums2.includes(v));
  let include2: number[] = nums2.filter((v, i) => !nums1.includes(v));
  let destroyDuplicate1: number[] = [];
  let destroyDuplicate2: number[] = [];
  include1.forEach((v, i) => {
    if (destroyDuplicate1.includes(v)) return;
    destroyDuplicate1.push(v);
  });
  include2.forEach((v, i) => {
    if (destroyDuplicate2.includes(v)) return;
    destroyDuplicate2.push(v);
  });
  return [destroyDuplicate1, destroyDuplicate2];
}

