function oddEven(a,b,c){
    var countOdd = 0;
    var countEven = 0;
    
    function checkNum(num){
        if(num % 2 == 0){
            return true;
        }
        else{
            return false;
        }
    }
    
    if(checkNum(a)){
        countEven++;
    }
    else{
        countOdd++;
    }

    if(checkNum(b)){
        countEven++;
    }
    else{
        countOdd++;
    }

    if(checkNum(c)){
        countEven++;
    }
    else{
        countOdd++;
    }

    console.log("Tổng số chẳn là: ", countEven);
    console.log("Tổng số lẻ là: ", countOdd);
}


oddEven(15,7,20);