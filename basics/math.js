function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}
//more than one function exports krne ho toh
//objects use kro js k

module.exports = {
    addFn: add,
    subFn: sub,
}