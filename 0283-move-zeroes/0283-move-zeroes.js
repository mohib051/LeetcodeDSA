/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let n = nums.length; 
    let j =-1; 
    for(let k = 0 ; k<n ; k++){
        if(nums[k] == 0 ){
            j= k ; 
            break; 
        }
    }
    for(let i = j+1 ; i<n; i++){
        if(nums[i]!== 0){
            [nums[i],nums[j]] = [nums[j] , nums[i]];
             j++; 
        }
    }
    return nums 
};