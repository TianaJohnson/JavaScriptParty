const practice = {
    add:(num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (p) => p,
    createUser: () => {
        const user = {firstName: 'Tiana'}
        user ['firstName'] = 'Johnson';
        return user;
    }
};
// const practice = (num1 , num2) => {
//     return num1 + num2;
// }

module.exports = practice;


// const divide = (num) => {
//     if(num % 3 == 0 && num % 5 == 0){
//     return 'Fizzbuzz';
// }else if(num % 3 == 0){
//     return 'Boop';
// }else if(num % 5 == 0){
//     return 'Buzz';
// }else{
//     return num;
// }};
// module.exports = divide;