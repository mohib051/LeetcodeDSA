/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
     let  low = 0 , high = nums.length-1;
    while(low < high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid] > nums[high]) {
            low = mid +1;
        }
        else{
        high = mid
        }
    }
    return nums[high];
};     