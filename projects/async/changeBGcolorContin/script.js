//generate a random color

const randomCLR = () => {
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intervalId
const startChangingColor = () => {
    
    const changeBGcolor = () => {
        document.body.style.backgroundColor = randomCLR();
    }
    
    intervalId = setInterval(changeBGcolor, 1000);
};

const stopChangingColor = () => {
    clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

