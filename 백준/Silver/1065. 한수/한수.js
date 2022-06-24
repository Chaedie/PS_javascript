//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const n = +input[0];

const answer = solution(n);
console.log(answer);

//* 로직함수
function solution(n) {
  if (n < 100) {
    return n;
  }

  let count = 99;
  for (let i = 111; i <= n; i++) {
    if (isHanSoo(i)) {
      count++;
    }
  }
  return count;
}

function isHanSoo(num) {
  num = num + '';
  let diff = num[0] - num[1];
  for (let i = 1; i < num.length - 1; i++) {
    if (num[i] - num[i + 1] !== diff) {
      return false;
    }
  }

  return true;
}
