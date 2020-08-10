function isLeapYear(year){
    const remainder = year % 4;
    const remainder2 = year % 100;
    const remainder3 = year % 400;
    if(remainder == 0 && remainder2 == 0 && remainder3 == 0){
        return true;
    }
    else {
       return false;
    }

}

const check = isLeapYear(2020);
console.log(check + ' Year is Leap Year');