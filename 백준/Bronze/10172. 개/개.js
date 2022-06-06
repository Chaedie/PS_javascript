//* 시스템
function solution() {
  // let answer = a - b;
  let answer = '|\\_/|\n|q p|   /}\n( 0 )"""\\\n|"^"`    |\n||_/=\\\\__|';
  console.log(answer);
}

//* 인풋
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();

let nums = input.split(' ');

let a = Number(nums[0]);
let b = Number(nums[1]);

//*아웃풋
solution();
