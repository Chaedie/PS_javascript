//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const str1 = input[0].trim();
const str2 = input[1].trim();
//* 함수 콜 (고정)
let answer = solution();
console.log(typeof answer === 'number' ? answer : answer.trim());
//* 로직함수
function solution() {
  const alphabet1 = new Array(27).fill(0);
  const alphabet2 = new Array(27).fill(0);

  for (let i = 0; i < str1.length; i++) {
    alphabet1[str1.charCodeAt(i) - 96]++;
  }
  for (let i = 0; i < str2.length; i++) {
    alphabet2[str2.charCodeAt(i) - 96]++;
  }

  let count = 0;
  for (let i = 0; i < 27; i++) {
    count += Math.abs(alphabet1[i] - alphabet2[i]);
  }

  return count;
}
