function solution(num_list, n) {
    const newArray = [];
    let num_list2 = [];
    let num_list3 = [];
    num_list2 = num_list.slice(n);
    num_list3 = num_list.slice(0,n);
    
    let answer = num_list2.join("") + num_list3.join("");
    
    let answer2 = answer.split("").map(n=>Number(n));
   
    return answer2
}