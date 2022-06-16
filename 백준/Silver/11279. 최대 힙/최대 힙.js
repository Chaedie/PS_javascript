class Heap {
  constructor() {
    this.heap = [null];
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  size() {
    return this.heap.length - 1;
  }

  push(value) {
    this.heap.push(value);
    let cur = this.heap.length - 1;
    let par = Math.floor(cur / 2);

    while (par > 0 && this.heap[par] < value) {
      this.swap(cur, par);
      cur = par;
      par = Math.floor(cur / 2);
    }
  }

  pop() {
    if (this.size() === 0) {
      return 0;
    }
    if (this.size() === 1) {
      return this.heap.pop();
    }
    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let cur = 1;
    let left = 2;
    let right = 3;

    while (this.heap[cur] < this.heap[left] || this.heap[cur] < this.heap[right]) {
      if (this.heap[left] < this.heap[right]) {
        this.swap(cur, right);
        cur = right;
      } else {
        this.swap(cur, left);
        cur = left;
      }
      left = cur * 2;
      right = cur * 2 + 1;
    }

    return returnValue;
  }
}

//* 인풋 - 디폴트
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

//* 인풋 - 커스텀
const n = Number(input[0]);
let heap = new Heap();
let answer = '';

for (let i = 1; i <= n; i++) {
  let num = Number(input[i]);
  sol(num);
}

console.log(answer.trim());

//* 시스템
function sol(num) {
  if (num === 0) {
    answer += heap.pop() + '\n';
  } else {
    heap.push(num);
  }
}
