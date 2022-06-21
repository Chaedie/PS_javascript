function solution(participant, completion) {
    const map = new Map();
    
    for (let i = 0; i < participant.length; i++) {
        let part = participant[i];
        let comp = completion[i];
        
        map.set(part, (map.get(part) || 0) + 1);
        map.set(comp, (map.get(comp) || 0) - 1);
        
    }
    
    for (let [k, v] of map) {
        if (v > 0) {
            return k;
        }
    }
    return 'none';
}