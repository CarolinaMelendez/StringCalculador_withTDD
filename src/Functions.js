
export function sumString(num_string){
    if (!num_string){
        return "Formato incorrecto";
    }

    if (num_string.indexOf('/') != -1){
    var delimiters = extract_parts_string(num_string)[0]
    num_string = extract_parts_string(num_string)[1]
    num_string = get_nums_form_string(delimiters,num_string)
    }

    let myArr_num = num_string.split(/,|-/).map(Number);
    let sum = sum_array(myArr_num);

    if (isNaN(sum)){ 
        return "Formato incorrecto";
    }
    return sum;
}

function extract_parts_string(num_string){
    var size_text = num_string.length
    var ini_slice = num_string.indexOf('/') 
    var end_slice = num_string.indexOf(' ') 
    var delimiter_part = num_string.slice(ini_slice+3,end_slice-2)
    num_string = num_string.slice(end_slice+1,size_text)

    var delimiters_array = delimiter_part.split('][')
    return [delimiters_array,num_string]
}

function get_nums_form_string(delimiters_array,num_string){
    delimiters_array.forEach(function(delimiter){
        num_string = num_string.split(delimiter).join(',');
     });
     return num_string;
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