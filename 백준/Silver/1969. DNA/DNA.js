//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const [n, m] = input[0].split(' ').map((x) => +x);
const DNAs = [];
for (let i = 0; i < n; i++) {
  DNAs.push(input[i + 1].trim());
}

//* 함수 콜 (고정)
let answer = solution();
console.log(typeof answer === 'number' ? answer : answer.trim());

//* 로직함수
function solution() {
  const answer = [];
  const distances = [];

  for (let i = 0; i < m; i++) {
    const map = new Map();
    for (let j = 0; j < n; j++) {
      map.set(DNAs[j][i], (map.get(DNAs[j][i]) || 0) + 1);
    }
    let maxCount = 0;
    for (let [k, v] of map) {
      if (v > maxCount) {
        maxCount = v;
        answer[i] = k;
        distances[i] = n - maxCount;
      } else if (v === maxCount) {
        k.localeCompare(answer[i]) < 0 ? (answer[i] = k) : null;
      }
    }
  }

  return [answer.join(''), distances.reduce((acc, cur) => (acc += cur), 0)].join('\n');
}
