function solution(a, b) {
    const date = new Date(`2016-${a}-${b} UTC`);
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    let idx = date.getDay();
    
    return days[idx];
    
}

                