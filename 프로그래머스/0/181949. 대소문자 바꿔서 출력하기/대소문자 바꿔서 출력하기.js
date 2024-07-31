const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];


 let array = [];
    array = str.split("");
// 문자열의 문자를 하나씩 배열에 입력하는
// 여기까지밖에 생각이 안났다..

  	for (let i = 0; i < array.length; i++) { // 문자로 전부 액세스
      	if (array[i].charCodeAt() >= 97 && array[i].charCodeAt() <= 122) { // 배열 안의 문자들이 소문자일 때
          array[i] = array[i].toUpperCase(); // 대문자로 변환
        } else { // 배열 안의 문자들이 대문자일 때
          array[i] = array[i].toLowerCase(); // 소문자로 변환
        }
    }
  
  str = array.join('');
  // 배열의 값들을 하나의 문자열로 합친다.
  console.log(str);
});