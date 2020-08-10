// Converting inch to feet function
function inchToFeet(inch){
    var feet = inch / 12;
    return feet;
}

var senior = [156, 288, 300]; // also can be done with array

var nanaFeet = inchToFeet(senior[0]);
console.log(nanaFeet);

var naniFeet = inchToFeet(288);
console.log(naniFeet);

var dadiFeet = inchToFeet(300);
console.log(dadiFeet);