//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
// const [n, k] = input[0].split(' ').map((x) => +x);
const n = +input[0];
// const nums = input[1].split(' ').map((x) => +x);

//* 함수 콜 (고정)
let answer = solution();
console.log(typeof answer === 'number' ? answer : answer.trim());

//* 로직함수
function solution() {
  let answer = '';
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = n - i; j < n; j++) {
      line += ' ';
    }
    for (let j = 0; j < n - i; j++) {
      line += '*';
    }
    answer += line + '\n';
  }

  return answer;
}
