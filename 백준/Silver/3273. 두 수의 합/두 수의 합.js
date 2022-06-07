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
  let count = 0;
  for (let p1 = 0; p1 < n; p1++) {
    for (let p2 = p1 + 1; p2 < n; p2++) {
      if (nums[p1] + nums[p2] === target) {
        count++;
      }
    }
  }
  console.log(count);
}
