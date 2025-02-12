/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let i =0 ;
    while(i<nums.length){
        let correct = nums[i];
        if( nums[i]<nums.length && nums[i]!= nums[correct]){
            let temp = nums[i];
            nums[i]= nums[correct];
            nums[correct] = temp
        }
        else i++;
    }
    for(let j=0 ; j<nums.length;j++ ){
        if(nums[j] != j) return j 
    }
    return nums.length
};