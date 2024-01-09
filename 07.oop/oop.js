//object literal : literally creating object, basic unit
const user = {
    username : 'harsh',
    loginCount : 8,
    signedIn : true,
    getUserDetails : () => {
        console.log('user details received from database');
    },
}

console.log(user.username);