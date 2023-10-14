/* 객체는 여러 가지 값이나 복잡한 값을 나타낼 수 있다. */
const obj = {}; // 빈 객체

obj.color = "yellow"; // color 프로퍼티 추가
obj["not an identifier"] = 3; // 유효한 식별자가 아닌 이름을 쓴다면 [] 를 통해 추가할 수 있음

console.log(obj["not an identifier"]);
console.log(obj["color"]);

const SIZE = Symbol();
obj[SIZE] = 8;
console.log(obj[SIZE]); // 심볼 프로퍼티에 접근할 때도 대괄호 사용

const sam1 = {
    name : 'Sam',
    age : 4,
}; // 각 프로퍼티를 쉼표로 구분

const sam2 = {name : 'Sam', age : 4}; // 한줄로 선언도 가능

const sam3 = {
    name : 'Sam',
    classification:{ // 프로퍼티 값도 객체가 될 수 있음
        kingdom : 'Anamalia',
        phylum : 'Chordata',
        class : 'Mamalia',
        order : 'Carnivoria',
        family : 'Felidae',
        subfamily : 'Felinae',
        genus : 'Felis',
        species : 'catus', 
    },
    speak(){ // 함수도 추가할 수 있음
        return "Meow";
    },
};

console.log(sam3.classification.family); // = sam3["classification"].family = sam3.classification["family"] = sam3["classification"]["family"]

console.log(sam3.speak());

delete sam3.speak; // speak 함수 삭제
//console.log(sam3.speak()); // 오류발생