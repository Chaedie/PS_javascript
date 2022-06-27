//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

//* 인풋 (커스텀)
let [n, ...files] = input;
n = +n;
files = files.map((file) => file.trim());

//* 함수 콜 (고정)
let answer = solution(n, files);
answer = typeof answer === 'number' ? answer : answer.trim();
console.log(answer);

//* 로직함수
function solution(n, files) {
  const map = new Map();

  files = files.map((file) => file.split('.'));
  for (let i = 0; i < n; i++) {
    map.set(files[i][1], (map.get(files[i][1]) || 0) + 1);
  }

  const result = [];
  for (let [file, count] of map) {
    result.push(file + ' ' + count);
  }

  return result.sort().join('\n');
}
