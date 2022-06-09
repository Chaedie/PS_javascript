//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath).toString().split('\n');
let ab = new Array();
for (let i = 0; i < Number.MAX_VALUE; i++) {
  ab = input[i].split(' ').map((num) => Number(num));
  if (ab[0] === 0 && ab[1] === 0) {
    break;
  }
  solution(ab);
}

//* 시스템
function solution(ab) {
  console.log(ab[0] + ab[1]);
}
