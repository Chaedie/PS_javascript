function solution(record) {
    // command에 기록을나눠서 저장 (편하게)
    const command = record.map((x) => x.split(' '));
    const idNick = new Map(); // userMap = {id, nick}
    const idLastLeave = new Map(); // idLastLeave = {id, lastLeave}
    // for (let comArr of command) {
    // for (let i = 0; i < command.length; i++) {
        // let [com, id, nick] = [...command[i]]
    for (let [com, id, nick] of command) {
        // id 기록 없으면 추가 (닉, 마지막 나간 인덱스)
        if (com === "Enter") {
            idNick.set(id, nick);
            idLastLeave.set(id, -1);
        } else if (com === "Leave") {
            // idNick.set(id, nick);
            idLastLeave.set(id, 1);
        } else if (com === "Change") {
            idNick.set(id, nick);
        }//35분 지났고, 밥먹으로감

    }
    console.log(command)
    const result = [];
    command.forEach((x) => {
        if (x[0] === "Enter") {
            result.push(`${idNick.get(x[1])}님이 들어왔습니다.`);
        } else if (x[0] === "Leave") {
            result.push(`${idNick.get(x[1])}님이 나갔습니다.`);
        }})
    console.log(result)
    return result
}