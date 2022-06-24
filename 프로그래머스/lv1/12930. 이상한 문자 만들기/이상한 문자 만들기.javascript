function solution(s) {
    
    let strs = s.split(' ');
    
    for (let i = 0; i < strs.length; i++) {
        strs[i] = makeWeiredStr(strs[i]);
    }
    
    return strs.join(' ');
}

function makeWeiredStr(word) {
    word = word.toLowerCase();
    let weiredStr = word.split(''); 
    for (let i = 0; i < word.length; i += 2) {
        weiredStr[i] = weiredStr[i].toUpperCase();
    }
    
    return weiredStr.join('');
}