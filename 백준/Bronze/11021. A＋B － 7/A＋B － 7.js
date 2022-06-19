//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 로직함수
let printNums = function (i, nums) {
  console.log(`Case #${i}: ${nums[0] + nums[1]}`);
};
//* 메인함수
function main() {
  const n = parseInt(input[0]);
  for (let i = 1; i <= n; i++) {
    let nums = input[i].split(' ').map((num) => parseInt(num));
    printNums(i, nums);
  }
}

//* 메인콜
main();
