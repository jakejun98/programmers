function solution(answers) {
  const math1 = [1, 2, 3, 4, 5];
  const math2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const math3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let counts = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (math1[i % math1.length] === answers[i]) {
      counts[0]++;
    }
    if (math2[i % math2.length] === answers[i]) {
      counts[1]++;
    }
    if (math3[i % math3.length] === answers[i]) {
      counts[2]++;
    }
  }
  
    
     const maxCount = Math.max(...counts);
  const result = [];

  for (let j = 0; j < counts.length; j++) {
    if (counts[j] === maxCount) {
      result.push(j + 1);
    }
  }

  if (result.length === 1) {
    return result;
  } else {
    return result.sort((a, b) => a - b);
  }

}