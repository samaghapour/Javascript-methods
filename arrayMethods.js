const myMap = (arr,callback) =>{
   let result = [];
   for(let i =0; i < arr.length; i++){
      result.push(callback(arr[i],i,arr))
   }
   return result
}

const myForEach = (arr,callback) =>{

   for(let i =0; i < arr.length; i++){
    callback(arr[i],i,arr)
   }
}

const myReduce = (arr,callback,initialValue = 0) =>{
   let accumulation = initialValue;

   for(let i =0; i < arr.length; i++){
      accumulation = callback(accumulation,arr[i],i,arr)
   }
   return accumulation
}

const myFilter = (arr,callback) =>{
   let result = [];
   for(let i = 0; i < arr.length;i++){
      if(callback(arr[i],i,arr)){
         result.push(arr[i])
      }
   }

   return result
}

const myFind = (arr,callback) =>{
   
   for(let i = 0; i < arr.length;i++){
      if(callback(arr[i],i,arr)){
         return arr[i];
      }
   }
   return undefined
}

const myFindIndex = (arr,callback) =>{
   
   for(let i = 0; i < arr.length;i++){
      if(callback(arr[i],i,arr)){
         return i;
      }
   }
   return -1
}

const defaultComparison = (a, b) => {
   if(typeof a === 'string' && typeof b === 'string'){
      return a.toLowerCase().localeCompare(b.toLowerCase())
   }else {
      return a - b
   }
};
const mySort = (arr,compareCallback = defaultComparison) =>{
   for(let i = 0; i < arr.length;i++){
      for(let j = 0; j < arr.length - 1; j++){
            if(compareCallback(arr[j] , arr[j + 1]) > 0){
               [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
      }
   }
   return arr
}

const myReverse = (arr) =>{
   let result = [];
   for(let i = arr.length - 1; i >= 0; i--){
      result.push(arr[i])
   }
   return result
}

const myJoin = (arr,joinString) =>{
   let result = '';
   for(let i = 0 ; i < arr.length; i++){
      result += arr[i] + joinString
   }

   return result
}

const myFlat = (arr,depth = 1) => {
   let result = [];

   for(let i= 0;i < arr.length;i++){
         if(Array.isArray(arr[i]) && depth > 0){
            result = result.concat(myFlat(arr[i], depth - 1));
         }else{
            result.push(arr[i]);
         }
   }
   return result;
}

const mapExample = myMap([1,2,3],(item) => item + 1);
const reduceExample = myReduce([1,2,3],(acc,num) => acc + num);
const filterExample = myFilter([1,2,3,4,5,6,7,8],(item) => item % 2 === 0);
const findExample = myFind([1,2,3,4,5,6,7,8],(item) => item > 3);
const findIndexExample = myFindIndex([1,2,3,4,5,6],(item) => item >= 3);
const sortAlphabeticExample = mySort(['Sam' ,'Aghapour', 'developer','frontend']);
const sortNumberExample = mySort([4, 2, 3, 1,5]);
const reverseExample = myReverse([1,2,3,4,5]);
const joinExample = myJoin(['frontend','javascript','react'],' and ');
const flatExample = myFlat([1, [2, [3, [4]], 5], 6],3);

console.log('map',mapExample);
console.log('reduce',reduceExample);
console.log('filter',filterExample);
console.log('find',findExample);
console.log('findIndex',findIndexExample);
console.log('sort alphabetic',sortAlphabeticExample);
console.log('sort number',sortNumberExample);
console.log('reverse',reverseExample);
console.log('join',joinExample);
console.log('flat',flatExample);
myForEach([1,2],(item) => console.log('forEach',item));