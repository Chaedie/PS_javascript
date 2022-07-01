function solution(s) {
    return s.toLowerCase().replace(/\b[a-z]/g,(x) => x.toUpperCase())
}