const divide = (num) => {
    if(num % 3 == 0 && num % 5 == 0){
    return 'Fizzbuzz';
}else if(num % 3 == 0){
    return 'Boop';
}else if(num % 5 == 0){
    return 'Buzz';
}else{
    return num;
}};
module.exports = divide;