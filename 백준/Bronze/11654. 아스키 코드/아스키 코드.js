//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

const char = input[0].trim();

console.log(char.charCodeAt());

// //* 인풋 - 커스텀
// solution(char);
// //* 시스템
// function solution(char) {
//   char.to;
// }
