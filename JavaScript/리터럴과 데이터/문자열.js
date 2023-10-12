// JavaScript 문자열은 유니코드(Unicode) 텍스트
const hellowolrd = "Hello wolrd!";

/* 이스케이프 */
/* 문자열을 따옴표 안에 쓰는 방법은? */
const dialog = 'Sam looked up, and said "hello, old friend!", as Max walked in.'; 
// dialog는 작은따옴표로 감싸여 있으므로 문자열 안에 큰따옴표(")를 걱정없이 쓸 수 있음.
const imperative = "Don't do that!";
// imperative는 큰따옴표로 감싸여 있으므로 문자열 안에 아포스트로피(')를 걱정없이 쓸 수 있음.

/* 두 가지 따옴표를 모두 써야한다면? */
//const dialog2 = "Sam looked up and said "don't do that!" to Max."; // 에러 발생
/* 역슬래시(\)를 써서 따옴표를 이스케이프하면 문자열이 여기서 끝나지 않았다고 알릴 수 있음. */
const dialog1 = "He looked up and said \"don't do that!\" to Max.";
const dialog2 = 'He looked up and said "don\'t do that!" to Max.';

/* 문자열에서 역슬래시 문자를 써야 할 때는? */
const s = "In JavaScript, use \\ as an escape character in strings.";