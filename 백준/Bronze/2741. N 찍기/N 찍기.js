//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀

const n = Number(input[0]);

sol(n);

//* 시스템
function sol(input) {
  let answer = '';
  for (let i = 1; i <= input; i++) {
    answer += i + '\n';
  }
  console.log(answer);
}
