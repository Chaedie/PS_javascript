//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
sol(input);

//* 시스템
function sol(input) {
  const words = input[0].split(' ');
  let a = words[0][2] + words[0][1] + words[0][0];
  let b = words[1][2] + words[1][1] + words[1][0];

  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}
