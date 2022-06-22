//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const n = Number(input[0]);

console.log(sol(n));

//* 로직함수
function sol(n) {
  if ((n % 4 === 0 && !(n % 100 === 0)) || n % 400 === 0) {
    return 1;
  }
  return 0;
}
