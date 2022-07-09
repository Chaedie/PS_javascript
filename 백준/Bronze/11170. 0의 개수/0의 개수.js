//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const n = +input[0];
let answer = [];
for (let i = 0; i < n; i++) {
  const nums = input[i + 1].split(' ').map((x) => +x);
  answer.push(solution(nums));
}
console.log(answer.join('\n'));

//* 로직함수
function solution(nums) {
  let count = 0;
  for (let i = nums[0]; i <= nums[1]; i++) {
    let str = i + '';
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '0') {
        count++;
      }
    }
  }

  return count;
}
