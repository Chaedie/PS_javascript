//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 인풋 - 커스텀
const inputZero = input[0].split(' ').map((num) => Number(num));
const n = inputZero[0];
const m = inputZero[1];

let p1 = 1;
let set = new Set();
for (let i = 0; i < n; i++) {
  set.add(input[p1++].trim());
}

let count = 0;
for (let i = 0; i < m; i++) {
  if (set.has(input[p1++].trim())) {
    count++;
  }
}
console.log(count);

// console.log(sol(n));

// //* 시스템
// function sol(num) {}
