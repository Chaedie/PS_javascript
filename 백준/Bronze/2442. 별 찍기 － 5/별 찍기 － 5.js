//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const n = +input[0];

//* 함수 콜 (고정)
let answer = solution();
console.log(typeof answer === 'number' ? answer : answer.trimEnd());

//* 로직함수
function solution() {
  let answer = '';
  for (let i = 0; i < n; i++) {
    let line = '';

    for (let j = i + 1; j < n; j++) {
      line += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      line += '*';
    }
    answer += line + '\n';
  }

  return answer;
}
