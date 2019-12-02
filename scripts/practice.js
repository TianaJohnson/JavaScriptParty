const axios = require('axios');

const practice = {
    isNull: () => null,
    checkValue: (p) => p,
    createUser: () => {
        const  
        const user = {firstName: 'Tiana'}
        user ['firstName'] = 'Johnson';
        return user;
    }
};
    fetchUser: () =>
     axios
        .get('https://jsonplaceholder.typicode.com/users/1')
        .then(res => res.data)
        .catch(err => 'error')

};

module.exports = practice;

