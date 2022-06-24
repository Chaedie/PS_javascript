function solution(s) {
    const arr = s.split('');
    
    if (s[0] === '+') {
        
        return Number(arr.slice(1).join(''));
    } else if (s[0] === '-') {
        
        return Number(- 1 * arr.slice(1).join(''));
    } else {
        
        return Number(s);
    }
}