//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
let str = input[0].trim();
let arr = new Array(26).fill(-1);

//* 시스템
for (let i = 0; i < 26; i++) {
  arr[i] = str.indexOf(String.fromCharCode(i + 97));
}
console.log(arr.join(' '));
