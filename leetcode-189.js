/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k > nums.length ? k - nums.length : k;
    for(var i=0;i<k;i++){
        nums.unshift(nums.pop());
    }
};

// 利用 apply 第二个参数为数组的特点
var rotate = function(nums, k) {
  k %= nums.length;
  if (k !== 0){ 
    var tmp = nums.slice(-k);
    nums.splice(-k, k);
    Array.prototype.unshift.apply(nums, tmp);
  }
};