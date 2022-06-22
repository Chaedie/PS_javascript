//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
let word = input[0].trim().toUpperCase();

console.log(sol(word));

//* 로직함수
function sol(word) {
  let map = new Map();
  let len = word.length;

  for (let i = 0; i < len; i++) {
    map.set(word[i], (map.get(word[i]) || 0) + 1);
  }

  let max = Math.max(...map.values());
  let sameCount = 0;
  for (let [k, v] of map) {
    if (map.get(k) === max) {
      sameCount++;
      answer = k;
    }
  }

  return sameCount === 1 ? answer : '?';
}
