//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
const n = +input[0].split(' ')[0];
const m = +input[0].split(' ')[1];

//* 함수 콜 (고정)
const answer = solution(n, m);
console.log(answer);

//* 로직함수
function solution(n, m) {
  const set1 = new Set();
  for (let i = 1; i < n + 1; i++) {
    set1.add(input[i].trim());
  }

  const set2 = new Set();
  for (let i = 1 + n; i < m + n + 1; i++) {
    set2.add(input[i].trim());
  }

  const resultSet = new Set([...set1].filter((x) => set2.has(x)));
  const result = new Array(...resultSet);
  result.unshift(result.length);

  return result.sort().join('\n');
}
