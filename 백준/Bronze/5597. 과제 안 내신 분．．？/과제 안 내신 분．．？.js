//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
// const [n, k] = input[0].split(' ').map((num) => parseInt(num));
// const n = parseInt(input[0]);
// const [n, ...nums] = input[0].split(' ').map((num) => parseInt(num));
// const [n, m] = input[0].split(' ').map((num) => parseInt(num));
// const n = parseInt(input[0]);
// const arrA = input[1]
// const curTime = input[0];
// const targetTime = input[1];
// console.log(input);
const nums = input.map((num) => Number(num));
sol(nums);

//* 로직함수
function sol(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], 1);
  }

  for (let i = 1; i <= 30; i++) {
    if (!map.has(i)) {
      console.log(i);
    }
  }
}
