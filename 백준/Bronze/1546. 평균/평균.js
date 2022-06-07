//* 인풋 - 디폴트
function main() {
  const fs = require('fs');
  const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

  //* 인풋 - 커스텀
  const input = fs.readFileSync(filePath).toString().split('\n');
  const n = Number(input[0]);
  const nums = input[1].split(' ').map((num) => Number(num));
  // const target = Number(input[2]);

  //*아웃풋
  solution(n, nums);
}

//* 시스템
function solution(n, nums) {
  let max = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  for (let i = 0; i < n; i++) {
    sum += (nums[i] / max) * 100;
  }
  
  console.log(sum / n);
}

main();
