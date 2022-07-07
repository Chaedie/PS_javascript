//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const n = +input[0];
//* 함수 콜 (고정)
let answer = solution();
//* 로직함수
function solution() {
  for (let i = 0; i < n; i++) {
    let stars = '';
    for (let j = i; j < n; j++) {
      stars += '*';
    }
    console.log(stars);
  }
}
