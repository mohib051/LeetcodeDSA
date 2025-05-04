/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
     let n = nums.length ;
     if(n <=1 || k===0 ) return ;
        k= k%n
    reverse(nums , 0, n-1)
    reverse(nums , 0, k-1)
    reverse(nums ,k, n-1)
 
};

var reverse = function( arr , start ,end ){
        while(start <= end){
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }

}