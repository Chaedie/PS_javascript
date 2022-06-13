//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
// const nums = input[0].split(' ').map((num) => Number(num));
const n = Number(input[0]);

console.log(pibo(n));

//* 시스템
function pibo(num) {
  if (num === 1) {
    return 1;
  }
  if (num === 0) {
    return 0;
  }
  return pibo(num - 1) + pibo(num - 2);
}
