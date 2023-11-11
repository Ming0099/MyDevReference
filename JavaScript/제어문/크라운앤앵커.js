// m 이상 n 이하의 무작위 정수를 return
function rand(m,n) {
    return m + Math.floor((n-m+1)*Math.random());
}

// Crown & Anchor의 여섯 그림 중 하나에 해당하는 문자열을 무작위로 반환
function randFace() {
    return ["crown","anchor","heart","spade","club","diamond"][rand(0,5)];
}

// 시작 조건, 초기 조건
let funds = 50;
let round = 0;

// 1보다 크거나, 100보다 작으면 계속한다.
while(funds >= 1 && funds < 100) {
    round++; // 라운드는 반복할 떄 마다 +1 된다.
    console.log(`라운드 ${round}:`); // 라운드 수 출력
    console.log(`\t남은 금액: ${funds}p`); // 시작금액 출력
    // 돈을 건다.
    let bets = {crown:0, anchor:0, heart:0, spade:0, club:0, diamond:0}; // 선택값 초기화
    let totalBet = rand(1,funds); // 걸 금액은 1부터 전체금액까지의 범위에서 랜덤으로 결정

    if(totalBet == 7) { // 7이 걸리면, 모든 금액을 heart에 건다.
        totalBet = funds;
        bets.heart = totalBet;
    } else { // 7이 아닌 그 외의 경우
        // 판돈 나누기
        let remaing = totalBet;
        do {
            let bet = rand(1,remaing); // 1이상 걸 금액이하의 랜덤한 값을 배팅 금액으로 차출
            let face = randFace(); // 배팅할 도형 선택
            bets[face] = bets[face] + bet; // 해당 도형에 대한 금액 입력
            remaing = remaing - bet; // 걸 금액에서 건 금액 빼기
        } while(remaing > 0) // 배팅할 금액 중 남은 금액이 0이 될때까지 수행
    }
    funds = funds - totalBet; // 최종 소지금은, 걸 금액을 뺀 결과
    // 결정한 배팅 내역을 출력
    // bets라는 객체에 face를 인자로 하는 함수를 실행한다? (객체 다루기 고급)
    console.log(`\t배팅 내역:: ` + 
        Object.keys(bets).map(face => `${face}: ${bets[face]} pence`).join(' / ') + 
        ` \n\t(총 배팅 금액: ${totalBet} pence)`);

    // 주사위 굴리기
    const hand = []; // 배열
    for(let roll = 0; roll < 3; roll++) { // 3번 던진다.
        hand.push(randFace()); // 나온 결과를 hand에 집어넣는다.
    }
    console.log(`\t나온 결과: ${hand.join(' / ')}`); // 배열이라서 이렇게??

    // 딴 돈 가져오기
    let winnings = 0; // 값 초기화

    for(let die=0; die<hand.length;die++) { // 3번 수행 (나온 결과 갯수가 3개이므로)
        let face = hand[die];
        if(bets[face] > 0) winnings = winnings + bets[face];
    }
    funds = funds + winnings;
    let res = winnings - totalBet;
    console.log(`\t딴 금액: ${winnings}`);
    console.log(`\t(수익정산 : ${res})`);
}
console.log(`\n\t최종 금액: ${funds}`);

/* 문제점??? 내가 직접 선택하는 것이 불가능하다? */
