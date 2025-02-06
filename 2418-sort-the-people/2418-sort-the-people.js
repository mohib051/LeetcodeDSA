/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
     let map = new Map();
     let n= names.length; 
     for(let i = 0 ; i<n ; i++){
        map.set(heights[i], names[i])
     }

    heights.sort((a,b)=>b-a)  
    let ans = new Array(n)

    for(let i=0 ; i<ans.length ; i++){
        ans[i] = map.get(heights[i])
    }
    return ans;
};