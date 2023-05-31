function solution(nums) {
    let nanum = nums.length/2
    let newArray = nums.filter((n,i)=> nums.indexOf(n)==i)
    
    if(newArray.length>= nanum ){
        return nanum
    }else return newArray.length
    
}