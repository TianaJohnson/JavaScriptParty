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
    fetchUser: () =>
     axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

};

module.exports = practice;

