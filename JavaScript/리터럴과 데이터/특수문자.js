/* 역슬래시(\)는 이스케이프 뿐만이 아닌 일부 특수문자나 임의의 유니코드 문자를 나타낼때도 사용 */
const C = "\n"; // 줄바꿈
const C2 = "\r"; // 캐리지 리턴
const C3 = "\t"; // 탭
const C4 = "\'"; // 작은따옴표
const C5 = "\""; // 큰따옴표
const C6 = "\`"; // 백틱
const C7 = "\$"; // 달러 기호
const C8 = "\\"; // 역슬래시
const C9 = "\u2310"; // 임의의 유니코드 코드 포인트 (16진수 코드 포인트)
const C10 = "\0";  // NUL 문자
const C11 = "\v"; // 세로 탭
const C12 = "\b"; // 백스페이스
const C13 = "\f"; // 폼 피드

console.log("[" + C13 + "]"); // Cn


/* 템플릿 문자열 */
let currentTemp = 19.5;
const message = "The current temperature is " + currentTemp + "\u00b0C";
console.log(message);

/* 문자열 템플릿에는 큰따옴표나 작은따옴표가 아닌 백틱(`)을 사용한다. */
let currentTemp2 = 19.5;
const message2 = `The current temperature is ${currentTemp2}\u00b0C`;
console.log(message2);


/* 여러줄 문자열 */
const multiline = "line1\
line2"; 
//line1line2

const multiline2 = "line1\n\
line2"
//line1
//line2

const multiline3 = `line1
line2`
//line1
//line2

console.log(multiline3);


/* 숫자와 문자열 */
const result1 = 3 + '30'; // 3이 문자열로 바뀐다. ('330')
const result2 = 3 * '30'; // '30'이 숫자로 바뀐다. (90)