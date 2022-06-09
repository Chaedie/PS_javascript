//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const input0 = input[0].split(' ').map((num) => Number(num));
const n = input0[0];
const m = input0[1];
const nums = input[1].split(' ').map((num) => Number(num));

let sums = new Array(n + 1);
sums[0] = 0;
sums[1] = nums[0];

for (let i = 1; i < n; i++) {
  sums[i + 1] = sums[i] + nums[i];
}

let answer = '';
for (let i = 0; i < m; i++) {
  let targets = input[i + 2].split(' ').map((num) => Number(num));
  answer += solution(targets) + '\n';
}
console.log(answer);

//* 시스템
function solution(targets) {
  return sums[targets[1]] - sums[targets[0] - 1];
}
