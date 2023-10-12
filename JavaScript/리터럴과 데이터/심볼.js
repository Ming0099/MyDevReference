/* 심볼은 유일한 토큰을 나타내기 위한 데이터 타입 */

const RED = Symbol("The color of a sunset!");
const ORANGE = Symbol("The color of a sunset!");
console.log(RED === ORANGE); // false => 심볼은 모두 서로 다름