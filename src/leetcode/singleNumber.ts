function singleNumber(nums: number[]): number {
  let single: number[] = [];

  nums.forEach((v: number) => {
    const index = single.indexOf(v);

    if (index !== -1) {
      // Jika v sudah ada dalam array single, hapus v dari array.
      single = single.slice(0, index).concat(single.slice(index + 1));
    } else {
      // Jika v belum ada dalam array single, tambahkan v.
      single.push(v);
    }
  });
  return single[0];
}
console.log(singleNumber([4, 1, 2, 1, 2]));
