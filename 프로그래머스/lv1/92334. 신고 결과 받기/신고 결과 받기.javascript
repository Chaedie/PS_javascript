function solution(id_list, report, k) {
    // 1) report 중복제거
    const set = new Set(report)
    
    // 2) id_list 객체에 담기
    const banedUsers = {}
    id_list.forEach((x) => banedUsers[x] = [0,[]]);
    // user가 = [0번 신고당함, []얘들을 신고함]
    
    // 3) report set에 있는 신고데이터 map에 담기
    for (let x of set) {
        let keyValue = x.split(' ');
        let key = keyValue[0];
        let value = keyValue[1];
        
        banedUsers[value][0]++;
        banedUsers[key][1].push(value);
    }
    
    // 4) k 이상이면 baned에 true
    const baned = [];
    id_list.forEach((x, i) => {
      if (banedUsers[x][0] >= k) {
          baned.push(x);
      }
    })

    // 5) baned에 true인 애들을 banedUsers에서 찾아서 mails에 ++ 하기
    const mails = new Array(id_list.length).fill(0);
    for (let i = 0; i < id_list.length; i++) {
        mails[i] = baned.filter((x) => banedUsers[id_list[i]][1].includes(x)).length;
    }   
    
    return mails
}

