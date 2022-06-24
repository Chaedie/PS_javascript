function solution(s){
    s = s.toLowerCase();
    
    let countP = 0;
    let countY = 0;   
    for(i = 0; i < s.length; i++) {
        if (s[i] === 'p') {
            countP++;
        }
        if (s[i] === 'y') {
            countY++;
        }
    }
    
    return countP === countY ? true : false 
}