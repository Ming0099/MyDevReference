function isPrime(num){
    if(num === 2){
      return true;
    }
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
    //for(let i = 2; i < num/2; i++){
      if(num % i === 0){
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        return false; 
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true; 
}

let bigArrayOfNumbers = [31,4,12,7,83,91]

/* break문을 써서 루프를 일찍 종료했을 때 인덱스 변수의 값이 필요
    -> i를 for루프 외부에 선언하여 for루프가 종료되고 외부에서 접근할 수 있도록 함. */
let i = 0;
for(; i < bigArrayOfNumbers.length; i++){
    if(isPrime(bigArrayOfNumbers[i])) break;
}

if(i === bigArrayOfNumbers.length)console.log('No prime numbers!');
else console.log(`First prime numnber found at position ${i}`);