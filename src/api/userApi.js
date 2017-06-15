import delay from './delay';

const users = [
    {
        id: 1,
        login: 'daniel',
        password: 'cudnik',
        role: 'admin'
    },
    {
        id: 2,
        login: 'user',
        password: '1234',
        role: 'user'
    }
];

const generateId = () => {
    return users[users.length - 1].id + 1;
};

class UserApi {
    static getAllUsers() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(Object.assign([], users));
            }, delay);
        });
    }


    static loginUser(userLogin) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const userToFind = users.filter(user => user.login == userLogin.login);
                if(userToFind.length !== 0){
                    if(userLogin.password == userToFind[0].password){
                        resolve(userToFind[0]);
                    }
                    else {
                        resolve({});
                    }
                }else {
                    resolve({});
                }
            }, 2000);
        });
    }
    static logoutUser() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
               resolve({});
            }, 2000);
        });
    }
    static getInitialState(){
        return users;
    }
}

export default UserApi;
