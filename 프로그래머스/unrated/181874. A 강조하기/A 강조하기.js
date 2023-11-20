function solution(myString) {
    const answer = [];
   for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'a' || myString[i] === 'A') {
            answer.push(myString[i].toUpperCase());
        } else {
            answer.push(myString[i].toLowerCase());
        }
    }

    return answer.join("")
}