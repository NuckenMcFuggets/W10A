
// This adds number_1 and number_2 then multiplies it by 5//

function do_math(number_1, number_2) {
    return (number_1 + number_2) * 5;
}
let math = do_math(50, 100);
let math_2 = do_math(100, 200);
let math_3 = do_math(175, 750);

//it then cycles through these variables to achieve different results//

console.log(math);
console.log(math_2);
console.log(math_3);

//logging the results from the debugger//

//this function will return false or true depending on the length of the string it gets fed//

function string_length(return_length_1) {
    if (return_length_1 >= 10) {
        return true;
    }
    return false;
}


//this is achieved by adding .length at the end of the string placed in the variable//

let result_1 = string_length(`I_small`.length);

let result_2 = string_length(`I_am_short`.length);

let result_3 = string_length(`I_am_over_ten_length`.length);


console.log(result_1);
console.log(result_2);
console.log(result_3);

//results from debugger are logged//




