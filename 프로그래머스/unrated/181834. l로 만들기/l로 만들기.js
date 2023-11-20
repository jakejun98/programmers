function solution(myString) {
    return myString.split("").map(n=>n<'l'?'l':n ).join("")
}