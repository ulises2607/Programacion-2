
function encontrarMayor(arr) {
    let mayor = -Infinity
    arr.forEach(element => {
        if(element > mayor){
            mayor = element
        }
    });
    return mayor
}

let vector = [-7,-2,-5,-1,-10]

console.log(encontrarMayor(vector));