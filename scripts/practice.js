const axios = require('axios');

const practice = {
    add:(num1, num2) => num1 + num2,
    isNull: () => null,
    checkValue: (p) => p,
    createUser: () => {  
        const user = {firstName: 'Tiana'}
        user ['lastName'] = 'Johnson';
        return user;
    },

    //apparently adding { } into the code below caused isssues when I commented out -
    //the divide loop, removing the { } made the test pass. 12/04 TJ
    fetchUser: () => 
     axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')
    
    // divide: (num) => { 
    //         if(num % 3 == 0 && num % 5 == 0){
    //         return 'Fizzbuzz';
    //     }else if(num % 3 == 0){
    //         return 'Fizz';
    //     }else if(num % 5 == 0){
    //         return 'Buzz';
    //     }else{
    //         return num;
    //     }}
}
module.exports = practice;

