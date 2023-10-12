let count = 10; // 숫자 리터럴, count는 더블
const blue = 0x0000ff; // 16진수
const umask = 0o0022; // 8진수
const Temp = 21.5; // 10진수
const c = 3.0e6; // 지수 (3.0 x 10^6)
const inf = Infinity;
const ninf = -Infinity;
//const nan = Nan; // 숫자가 아님

/* Number 객체의 유용한 프로퍼티 */

const small = Number.EPSILON; // 1에 더했을 때 1과 구분되는 결과를 만들 수 있는 가장 작은 값
const bigInt = Number.MAX_SAFE_INTEGER; // 표현할 수 있는 가장 큰 정수
const max = Number.MAX_VALUE; // 표현할 수 있는 가장 큰 숫자
const minInt = Number.MIN_SAFE_INTEGER; // 표현할 수 있는 가장 작은 정수
const min = Number.MIN_VALUE; // 표현할 수 있는 가장 작은 숫자
const ninf2 = Number.NEGATIVE_INFINITY; // -Infinity
const nan2 = Number.NaN; // NaN
const inf2 = Number.POSITIVE_INFINITY; // Infinity