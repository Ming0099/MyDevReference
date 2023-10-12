// let은 변수 선언에만 쓰이고, 각 변수는 한 번만 선언할 수 있음.
let tempA = 22;
tempA = 22.5;

// 초깃값을 할당하지 않으면 암시적으로 undefined가 할당
let tempB; // let tempB = undefined; 와 동일

// let 문 하나에서의 여러 변수 선언
let tempC, room1 = "conference_room_a", room2 = "lobby";

// const는 상수 선언에 쓰인다.
const tempD = 21.5, tempE = 30;