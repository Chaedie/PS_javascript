//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const n = Number(input[0]);
let nums = input[1].split(' ').map((num) => Number(num));

//* 시스템

let count = 0;
let isPrimeNumber = true;
for (let j = 0; j < n; j++) {
  isPrimeNumber = true;

  for (let i = 2; i < nums[j]; i++) {
    if (nums[j] % i === 0) {
      isPrimeNumber = false;
    }
  }

  if (nums[j] === 1) {
    isPrimeNumber = false;
  }

  if (isPrimeNumber) {
    count++;
  }
}

console.log(count);
