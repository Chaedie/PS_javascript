//* 인풋 (디폴트)
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
//* 인풋 (커스텀)
const n = +input[0];
const result = [];
for (let i = 0; i < n; i++) {
  const str = input[i + 1].split(' ').map((x) => x.trim());
  result.push(solution(str));
}

console.log(result.join('\n'));
//* 로직함수
function solution(str) {
  const strA = str[0].split('').sort();
  const strB = str[1].split('').sort();

  for (let i = 0; i < strA.length; i++) {
    if (strA[i] !== strB[i]) {
      return 'Impossible';
    }
  }

  return 'Possible';
}
