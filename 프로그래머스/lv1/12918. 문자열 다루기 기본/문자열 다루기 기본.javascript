function solution(s) {
  if (!(s.length === 4 || s.length === 6)) {
    return false;
  }

  let zero = '0';
  let nine = '9';
  for (let i = 0; i < s.length; i++) {
    if (
      s.charCodeAt(i) > nine.charCodeAt(0) ||
      s.charCodeAt(i) < zero.charCodeAt(0)
    ) {
      return false;
    }
  }
  return true;
}