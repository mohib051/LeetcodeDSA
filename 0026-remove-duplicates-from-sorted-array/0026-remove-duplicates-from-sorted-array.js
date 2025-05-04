/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let set = new Set(nums);
    let uniqueSet = Array.from(set);
    for(let i = 0 ; i< uniqueSet.length ; i++){
        nums[i] = uniqueSet[i]
    } 
    return uniqueSet.length;
};