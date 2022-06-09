//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);

//* 인풋 - 커스텀
for (let i = 0; i < n; i++) {
  let testCase = input[i + 1].split(' ');
  let totalCount = Number(testCase[0]);
  let word = testCase[1].trim();

  solution(totalCount, word);
}

//* 시스템
function solution(totalCount, word) {
  let answer = '';

  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < totalCount; j++) {
      answer += word[i];
    }
  }
  console.log(answer);
}
