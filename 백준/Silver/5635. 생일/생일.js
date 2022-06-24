//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀, 함수 콜
const n = Number(input[0]);
let names = [];
let births = [];

for (let i = 0; i < n; i++) {
  let date = new Date();
  let [name, ...nums] = input[i + 1].split(' ');
  if (nums[0].length === 1) {
    nums[0] = '0' + nums[0];
  }
  if (nums[1].length === 1) {
    nums[1] = '0' + nums[1];
  }
  let birth = nums[2].trim() + nums[1] + nums[0];
  names.push(name);
  births.push(birth);
}

sol(names, births);
//* 로직함수
function sol(names, births) {
  let maxBirth = births[0];
  let minBirth = births[0];
  let maxName = names[0];
  let minName = names[0];
  for (let i = 1; i < n; i++) {
    if (births[i] > maxBirth) {
      maxBirth = births[i];
      maxName = names[i];
    }
    if (births[i] < minBirth) {
      minBirth = births[i];
      minName = names[i];
    }
  }
  console.log(maxName);
  console.log(minName);
}
