//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

//* 인풋 (커스텀)
const [n, ...inputs] = input.map((el) => el.trim());
//* 함수 콜 (고정)
let answer = solution(n, inputs);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(n, inputs) {
  const result = [];
  for (let i = 0; i < Number(n); i++) {
    result.push(findFrequentChar(inputs[i]));
  }

  return result.join('\n');
}

function findFrequentChar(str) {
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    map.set(str[i], (map.get(str[i]) || 0) + 1);
  }

  map.delete(' ');
  let max = Math.max(...map.values());
  let maxCount = 0;
  for (let [k, v] of map) {
    if (v === max) {
      maxCount++;
      maxChar = k;
    }
  }

  return maxCount === 1 ? maxChar : '?';
}
