//* 시스템
function solution(input) {
  let answer = input + '??!';

  console.log(answer);
}

//* 인풋
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let nums = input.split(' ');

let a = Number(nums[0]);
let b = Number(nums[1]);

//*아웃풋
solution(input);
