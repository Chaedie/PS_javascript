//* 인풋 - 디폴트
const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().split('\n');

//* 메인함수
// const [n, k] = input[0].split(' ').map((num) => parseInt(num));
// const n = parseInt(input[0]);
// const [n, ...nums] = input[0].split(' ').map((num) => parseInt(num));
// const [n, m] = input[0].split(' ').map((num) => parseInt(num));
// const n = parseInt(input[0]);
// const arrA = input[1]
const curTime = input[0];
const targetTime = input[1];
console.log(sol(curTime, targetTime));

// //* 로직함수
function sol(curTime, targetTime) {
  let curTimeSec = timeToSecond(curTime);
  let targetTimeSec = timeToSecond(targetTime);
  let answer = '';

  if (curTimeSec < targetTimeSec) {
    answer = secToTime(targetTimeSec - curTimeSec);
  } else {
    answer = secToTime(targetTimeSec + 86400 - curTimeSec);
  }
  return answer;
}

function timeToSecond(time) {
  let hh = parseInt(time.slice(0, 2));
  let mm = parseInt(time.slice(3, 5));
  let ss = parseInt(time.slice(6, 8));
  return (hh * 60 + mm) * 60 + ss;
}

function secToTime(sec) {
  let hh = Math.floor(sec / 3600) + '';
  let mm = Math.floor((sec % 3600) / 60) + '';
  let ss = Math.floor((sec % 3600) % 60) + '';

  return `${hh.padStart(2, '0')}:${mm.padStart(2, '0')}:${ss.padStart(2, '0')}`;
}
