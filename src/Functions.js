
export function sumString(num_string){
    if (!num_string){
        return "Formato incorrecto";
    }

    if (num_string.indexOf('/') != -1){
    var delimiter = extract_parts_string(num_string)[0]
    num_string = extract_parts_string(num_string)[1]

    num_string = num_string.split(delimiter).join(',');
    }

    let myArr_num = num_string.split(/,|-/).map(Number);
    return sum_array(myArr_num);
}

function extract_parts_string(num_string){
    var size_text = num_string.length
    var ini_slice = num_string.indexOf('/') 
    var end_slice = num_string.indexOf(' ') 
    var delimiter = num_string.slice(ini_slice+3,end_slice-2)
    num_string = num_string.slice(end_slice+1,size_text)
    return [delimiter,num_string]
}
function sum_array(array_numbers){
    var suma = 0;
    array_numbers.forEach(function(numero){
        if(numero > 1000){
            numero = 0;
        }
        suma += numero;
    });
    return suma;
}