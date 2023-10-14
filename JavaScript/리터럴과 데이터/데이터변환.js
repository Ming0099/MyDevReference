/* 숫자로 변환 */
const numStr = "33.3";
const num = Number(numStr); 
console.log(numStr + 1); // 33.31
console.log(num + 1); // 34.3

const a = parseInt("16 volts", 10); // "volts"는 무시됨, 10진수 16
console.log(a); // 16
const b = parseInt("3a", 16); // 16진수 3a를 10진수로 바꿈
console.log(b); // 58
const c = parseFloat("15.5 kph"); // "kph"는 무시됨, parseFloat은 항상 기수가 10이라고 가정
console.log(c); // 15.5


/* 문자열로 변환 */
const n = 33.5;
const s = n.toString();
console.log(n + 1); // 34.5
console.log(s + 1); // 33.51

const arr = [1, true, "hello"];
console.log(arr.toString()); // 1,true,hello - 각 요소를 문자열로 바꾼 다음 쉼표로 연결한 문자열 반환


/* 불리언으로 변환 */
const n2 = 0;
const b1 = !!n2;
console.log(b1); // false
const b2 = Boolean(n2);
console.log(b2); // false