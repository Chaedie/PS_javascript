//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const n = Number(input[0]);

//* 인풋 - 커스텀
for (let i = 0; i < n; i++) {
  let ox = input[i + 1];
  solution(ox);
}

//* 시스템
function solution(ox) {
  let score = 0;
  let point = 1;
  let streakBonus = 0;
  for (let i = 0; i < ox.length; i++) {
    if (ox[i] === 'O') {
      score += point + streakBonus;
      streakBonus++;
    } else {
      streakBonus = 0;
    }
  }
  console.log(score);
}
