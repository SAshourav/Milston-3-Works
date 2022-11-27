function factorial(num){
    var fact = 1;
    for(var i=1; i<=num; i++){
        fact = fact * i;
    }
    return fact;
}
var result = factorial(5)
console.log(result);

//recursive part

function factUsingRecursive(num){
    if(num == 0){
        return 1;
    }else{
        return  num*factUsingRecursive(num-1);  //5*4*3*2*1 why it's not printting if value return 1?
    }
}

var result1 = factUsingRecursive(5);
console.log(result1);