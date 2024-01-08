//promise1
const promise1 = new Promise((resolve, reject) => {

    setTimeout(() => {
        console.log('Async task is complete');
        resolve(); //this line will connect to promise.then || without this line no. 11 won't be called
    }, 1000);

});

promise1.then(() => {
    console.log('Promise consumed');
});

//promise 2
new Promise ((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2 completed');
        resolve();
    }, 1000);
}).then(() => {
    console.log('Async 2 consumed');
});

//promise3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            username : 'harsh',
            email : 'harsh@harsh.com'
        });
    }, 1000);
});
promise3.then((user) => {
    console.log(user);
});

//promise4
const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if(!error){
            resolve({
                username : 'harsh',
                email : 'harsh@harsh.com'
            });
        }else{
            reject('ERROR : something went wrong');
        }
    }, 1000);
})
promise4.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log(username);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("the promise is either resolved or rejected");
});

//promise5
const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let err = false;
        if(!err) {
            resolve({
                username: 'js',
                password: '123'
            });
        }else{
            reject("ERROR: JS went wrong");
        }
    }, 1000);
});
const consumePromise5 = async () => {
    try {
        const response = await promise5;
    console.log(response);
    } catch {
        console.log('ERROR');
    }
}
consumePromise5();

// const getAllUser = async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/hrsh9');
//         // console.log(response);
//         const data = await response.json();
//         console.log(data);
//     } catch {
//         console.log('E:', error);
//     }
// }

// getAllUser();

fetch('https://api.github.com/users/hrsh9').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((reject) => {
    console.log('ERROR');
})