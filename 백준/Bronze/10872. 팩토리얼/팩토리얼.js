//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
const n = Number(input[0]);
// const nums = input[1].split(' ').map((num) => Number(num));
// const target = Number(input[2]);

//*아웃풋
solution();

//* 시스템
function solution() {
  let answer = 1;
  for (let i = 2; i <= n; i++) {
    answer = answer * i;
  }
  console.log(answer);
}
