let bigArrayOfNumbers = [32,4,11,7,8,9]

function isPrime(num){
    if(num === 2){
      return true;
    }
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        // 한 번이라도 나누어 졌으니 소수가 아니므로 return false
        return false; 
      }
    }
    // 나눠진 수가 없다면 해당 수는 소수이므로 return true
    return true; 
}

/* 배열의 앞 요소부터 splice하게 되면 배열의 뒷 요소에 영향을 줘 원하는 결과가 나오지 않음 */
/*
for(let i=0; i<bigArrayOfNumbers.length; i++){
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i,1);
}
*/

/* 해결법 : 감소하는 인덱스를 사용해 뒷 요소부터 처리 */
for(let i=bigArrayOfNumbers.length; i >= 0; i--){
    if(isPrime(bigArrayOfNumbers[i])) bigArrayOfNumbers.splice(i,1);
}

console.log(bigArrayOfNumbers);


