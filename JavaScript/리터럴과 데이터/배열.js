/* 일반적인 객체와 달리 항상 순서가 있고, 키는 순차적인 숫자이다. */
/* C언어의 배열과 링크드 리스트의 혼합형 */

const a1 = [1,2,3,4];   // 숫자로 구성된 배열

const a2 = [1,'two',3,null];    // 여러가지 타입으로 구성된 배열

const a3 = [    // 여러 줄로 정의한 배열
    "What the hammer? What the chan?",
    "In what furnace was thy brain?",
    "What the anvil? What dread grasp",
    "Dare its deadly terrors clasp?",
];

const a4 = [    // 객체가 들어있는 배열
    {name : "Rudy", gardness : 9},
    {name : "Diamond", gardness : 10},
    {name : "Topaz", gardness : 8},
];

const a5 = [    // 배열이 들어있는 배열
    [1,3,5],
    [2,4,6],
];

const arr = ['a','b','c'];
console.log(arr.length); // 3

console.log(arr[0]); // 'a'
console.log(arr[arr.length - 1]); // 'c'    arr.length - 1 = arr의 마지막 요소의 인덱스

arr[2] = 3; // 배열 요소 값 덮어 쓰기
console.log(arr); // ['a', 'b', 3]