function checkTriangle(a, b ,c) {

    if ((a == b) && (b == c)) {
        console.log("Tam Giác Đều");
    } else if ((a * a + b * b == c * c) || (a * c + c * c == b * b) || (b * b + c * c == a * c)) {
        console.log("Tam Giác Vuông");
    } else if ((a == b) || (a == c) || (b == c)) {
        console.log("Tam Giác Cân");
    } else {
        console.log("Error");
    }
}

checkTriangle(2,2,1);
checkTriangle(3,3,3);
checkTriangle(3,4,5);
checkTriangle(3,2,5);