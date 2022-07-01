function solution(board, moves) {
    // 아래부터 차곡차곡 쌓여있다
    // 153에서 뽑아서 스택에 쌓는다.
    // 스택에 같은 인형 만나면 둘다 없어짐
    // 인형 없는 곳에 작동하면 아무일도 안일어남
    // 바구니 크기는 무한
    // 크레인 작동시킨 후 터뜨려 사라진 인형의 개수를 return 
    // board는 55이상 3030 이하
    // board 0은 빈칸, 1~100은 각각 인형 
    // moves 1~1000, 각 배열의 가로 줄  [1,5,3,5,1,2,1,4] 핑크 악어 볼 볼 악 무 핑

    const doll = {
        count : 0,
        stack : [],
        board : board,
    }
    // moves 배열을 실행한다. pickDoll(moves[i])
    for (let i = 0; i < moves.length; i++) {
        pickDoll(moves[i], doll);
    }
    // stack 체크 (투포인터) //ex [1,1,2,3,3,2,2,3,3,1,5,6]
    let dist = 1;
    for (let p1 = 0; p1 < doll.stack.length; p1++) {
        if (doll.stack[p1] <= 0) {
            dist = 1;
            continue;
        }
        if (doll.stack[p1] === doll.stack[p1 + dist]) {
            doll.count += 2;
            doll.stack[p1] = -1;
            doll.stack[p1 + dist] = -1
            while(doll.stack[p1] === -1 && (p1 > 0)) {
                p1--;
            }
            while(doll.stack[p1 + dist] === -1 && (p1 + dist <= doll.stack.length)) {
                dist++;
            }
            p1--;
        }        
    }
    
    return doll.count;    
}

function pickDoll(column, doll) {
    let col = column - 1;
    
    // board의 column에 각 로우에 인형이 있는지 확인
    // 인형 있으면 0으로 만들고, 스택에 push
    for (let i = 0; i < doll.board.length; i++) {
        let pos = doll.board[i][col];
        if (pos === 0) {
            continue;
        } 
        doll.stack.push(pos);
        doll.board[i][col] = 0;
        // break 안해서 10분 날림
        break;
    }
    
    return;
}