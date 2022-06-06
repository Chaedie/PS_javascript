//* 시스템
function solution(a) {
  // let answer = '';

  for (let i = 1; i < 10; i++) {
    console.log(`${a} * ${i} = ${a * i}`);
  }
  // console.log(answer);
}

//* 인풋
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

let nums = input.split(' ');

let a = Number(nums[0]);
let b = Number(nums[1]);

//*아웃풋
solution(a);
