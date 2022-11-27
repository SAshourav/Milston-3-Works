function animalCalculate(depth){
    var animal = 0;
    if(depth <= 10){
        animal = depth * 50;
    }else if(depth <= 20){
        var first10 = 10*50;
        depth = depth - 10;
        animal = (depth * 100)+first10;
    }else{
        var firstPart = 10 * 50;
        var secondPart = 10 * 100;
        var thirdPart = (depth-20)*300;
        animal = firstPart+secondPart+thirdPart;
    }
    return animal;
}
var result = animalCalculate(35);
console.log(result);