//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 메인함수
function main() {
  const num = parseInt(input[0]);

  for (let i = 1; i < num; i++) {
    if (sol(num, i)) {
      return console.log(i);
    }
  }

  return console.log(0);
}
//* 로직함수
function sol(num, part) {
  let sum = part;
  part += '';
  for (let i = 0; i < part.length; i++) {
    sum += parseInt(part[i]);
  }

  if (sum === num) {
    return true;
  }
  return false;
}

//* 메인콜
main();
