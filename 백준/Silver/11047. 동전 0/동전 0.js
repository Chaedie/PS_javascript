//* 시스템
function solution(n, target, coin) {
  let count = 0;
  for (let i = 0; i < n; i++) {
    let divided = Math.floor(target / coin[n - (i + 1)]);
    if (divided > 0) {
      count += divided;
      target -= divided * coin[n - (i + 1)];
    }
  }
  console.log(count);
}

//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

//* 인풋 - 커스텀
const input = fs.readFileSync(filePath).toString().split('\n');
const input0 = input[0].trim().split(' ');
const n = Number(input0[0]);
const target = Number(input0[1]);
// const n = Number(input[0].trim());
// const nums = input[1].split('').map((num) => Number(num));
let coin = [];
for (let i = 0; i < n; i++) {
  coin[i] = Number(input[i + 1]);
}
// console.log(n, k, coin);

//*아웃풋
solution(n, target, coin);
