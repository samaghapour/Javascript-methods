const myKeys = (object) =>{
    const result = [];

    for(let key in object){
        if(object.hasOwnProperty(key)){
            result.push(key)
        }
    }
    return result
};

const myValues = (object) =>{
    const result = [];

    for(let key in object){
        if(object.hasOwnProperty(key)){
            result.push(object[key])
        }
    }
    return result
};

const myEntries = (object) =>{
    const result = [];

    for(let key in object){
        if(object.hasOwnProperty(key)){
            result.push([key,object[key]])
        }
    }
    return result
};

const myAssign = (target,source) =>{
    const result = target;

    for(let key in source){
        if(source.hasOwnProperty(key)){
            result[key] = source[key]
        }
    }
    return result
};



const keysExample = myKeys({name:"Sam",Age:22});
const valuesExample = myValues({name:"Sam",Age:22});
const entriesExample = myEntries({name:"Sam",Age:22});
const assignExample = myAssign({name:"Sam",Age:22},{profession:'Frontend engineer'});


console.log(keysExample)
console.log(valuesExample)
console.log(entriesExample)
console.log(assignExample)