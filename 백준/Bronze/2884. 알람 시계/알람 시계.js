//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
// const [n, k] = input[0].split(' ').map((num) => parseInt(num));
// const [n, ...nums] = input[0].split(' ').map((num) => parseInt(num));
// const [n, m] = input[0].split(' ').map((num) => parseInt(num));
// const [n, ...nums] = input.map((nums) => nums.split(' ').map((num) => Number(num)));
// const n = Number(input[0]);
// const inputs = input.map((nums) => nums.split(' ').map((num) => Number(num)));
// let word = input[0].trim().toUpperCase();
const nums = input[0].split(' ').map((num) => Number(num));

console.log(sol(nums));

//* 로직함수
function sol(nums) {
  let min = nums[0] * 60 + nums[1];
  let answer = min - 45;

  if (answer < 0) {
    answer += 24 * 60;
  }
  return `${Math.floor(answer / 60)} ${answer % 60}`;
}
