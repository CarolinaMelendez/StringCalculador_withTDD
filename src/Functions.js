




export function sumString(num_string){
    if (!num_string){
        return "Formato incorrecto";
    }
    if (num_string.length == 1){
        return  Number(num_string);
    }
    let myArr_num = num_string.split(",").map(Number);

/*
    var b = num_string.split(',').map(function(item) {
        return parseInt(item, 10);
    });
    return b;*/
    return sum_array(myArr_num);
}

function sum_array(array_numbers){
    var suma = 0;
    array_numbers.forEach(function(numero){
        suma += numero;
    });
    return suma;
}