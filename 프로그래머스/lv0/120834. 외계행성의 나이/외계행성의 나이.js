function solution(age) { //a 0 b1 c2 d3
     let alpha = {
        0 : "a",
        1 : "b",
        2 : "c",
        3 : "d",
        4 : "e",
        5 : "f",
        6 : "g",
        7 : "h",
        8 : "i",
        9 : "j"
    }
     let newAge = age + "";
    return newAge.split("").map((el)=> alpha[el]).join("");
}