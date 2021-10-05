




export function sumString(num_string){
    if (!num_string){
        return "Formato incorrecto";
    }
    let myArr_num = num_string.split(/,|-/).map(Number);

    return sum_array(myArr_num);
}

function sum_array(array_numbers){
    var suma = 0;
    array_numbers.forEach(function(numero){
        suma += numero;
    });
    return suma;
}