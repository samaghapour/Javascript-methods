const myMax = (...numbers) => {
    if (numbers.length === 0) return -Infinity; 
    let maxNumber = numbers[0];

    for(let i = 1; i < numbers.length;i++){
      if(numbers[i] > maxNumber){
        maxNumber = numbers[i]
      }
    }
    return maxNumber
}

const myMin = (...numbers) => {
    if (numbers.length === 0) return -Infinity; 
    let minNumber = numbers[0];

    for(let i = 1; i < numbers.length;i++){
      if(numbers[i] < minNumber){
        minNumber = numbers[i]
      }
    }
    return minNumber
}

const myAbs = (number) => {
    if(number < 0){
        return -number
    }else{
        return number
    }
}

function myRound(number) {
   
    let integerPart = number | 0; // Equivalent to Math.floor(number)
 
    let fractionalPart = number - integerPart;

    if (fractionalPart >= 0.5) {
        return integerPart + 1;
    } else {
        return integerPart;
    }
}


const maxExample = myMax(4,98,87,53,17,89,110,43);
const minExample = myMin(51,4,98,87,53,17,89,110,43);
const absExample = myAbs(-20);
const roundExample = myRound(7.4);

console.log(maxExample)
console.log(minExample)
console.log(absExample)
console.log(roundExample)