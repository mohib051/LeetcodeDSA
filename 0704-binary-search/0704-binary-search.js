/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let n = nums.length
    let mid; 
    let start = 0
    let end = n-1
    while(start <= end){
        mid = Math.floor((start + end)/2)
        
        if(nums[mid] === target ) return mid ;

        else if(nums[mid] < target ) {
            start = mid +1;
        }
        else if (nums[mid] > target ){
            end = mid-1;
        }
    }
    return -1 ;
};