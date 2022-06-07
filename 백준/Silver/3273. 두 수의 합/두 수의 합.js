//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
// const input0 = input[0].trim().split(' ');
// const n = Number(input0[0]);
// const target = Number(input0[1]);
const n = Number(input[0]);
const nums = input[1].split(' ').map((num) => Number(num));
const target = Number(input[2]);

//*아웃풋
solution();

//* 시스템
function solution() {
  nums.sort((a, b) => a - b);

  let count = 0;
  let p1 = 0;
  let p2 = n - 1;
  let sum = 0;

  while (p1 < p2) {
    sum = nums[p1] + nums[p2];
    if (sum === target) {
      count++;
      p1++;
      p2--;
    } else if (sum > target) {
      p2--;
    } else {
      p1++;
    }
  }

  console.log(count);
}
