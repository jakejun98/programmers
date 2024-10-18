
const fs = require("fs");

// 입력을 읽어오고, 공백으로 나누어 배열로 저장합니다.
let input = fs.readFileSync(0).toString().trim().split(" ");

// A, B, C 값을 각각 Number로 변환합니다.
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

// 첫째 줄: (A + B) % C
console.log((A + B) % C);

// 둘째 줄: ((A % C) + (B % C)) % C
console.log(((A % C) + (B % C)) % C);

// 셋째 줄: (A * B) % C
console.log((A * B) % C);

// 넷째 줄: ((A % C) * (B % C)) % C
console.log(((A % C) * (B % C)) % C);