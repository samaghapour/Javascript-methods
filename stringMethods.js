const myCharAt = (string,index) =>{
    return string[index]
}

const myIndexOf = (string,char) =>{
        for(let i = 0;i < string.length; i++){
            if(string[i] === char){
                return i
            }
        }
        return -1
}

const myToUpperCase = (string) =>{
    let result = '';

    for(let i =0; i < string.length; i++){
        let code = string.charCodeAt(i);

          // Check if it is a lowercase letter (between 'a' and 'z')
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32); // Convert to uppercase
        } else {
            result += string[i];
        }
    }
    return result;
}

const mySplit = (string,separator) =>{
    let result = [];
    let temp = ''
    for(let i =0; i < string.length; i++){
       if(string[i] === separator){
            result.push(temp);
            temp = ''
       }else{
        temp += string[i]
       }
    }

    // push the last temp
    result.push(temp);

    return result;
}

const myReplace = (string, search, replace) => {
    let result = '';
    let i = 0;
    let found = false;

    // loop through each character
    while (i < string.length) {
        // check if we have found the search string
        if (string[i] === search[0]) {
            // check if the rest of the search string matches
            let match = true;
            for (let j = 0; j < search.length; j++) {
                if (string[i + j] !== search[j]) {
                    match = false;
                    break;
                }
            }
            // if a match is found, append the replacement string
            if (match) {
                result += replace;
                i += search.length; // skip the search string in the original string
                found = true;
                continue;
            }
        }
        // if no matche, append the current character to the result
        result += string[i];
        i++;
    }

    // if no match was found, return the original string
    if (!found) {
        return string;
    }
    
    return result;
}

const myTrim = (string) =>{
    let result = '';
    let startIndex = 0;
    let endIndex = string.length - 1;

    while(string[startIndex] === ' ' && startIndex <= endIndex){
        startIndex++
    }

    while(string[endIndex] === ' ' && endIndex >= startIndex){
        endIndex--
    }

    for(let i = startIndex; i < endIndex; i++){
        result += string[i]
    }

    return result
}

const charAtExample = myCharAt('Javascript',4);
const indexOfExample = myIndexOf('Javascript','v');
const toUppercaseExample = myToUpperCase('Javascript');
const splitExample = mySplit('Javascript,React,Frontend,Sam',',');
const replaceExample = myReplace('I love javascript and Angular','Angular','React');
const trimExample = myTrim('   I love javascript         ');


console.log('charAt',charAtExample);
console.log('indexOf',indexOfExample);
console.log('toUppercase',toUppercaseExample);
console.log('split',splitExample);
console.log('replace',replaceExample);
console.log('trim',trimExample);
