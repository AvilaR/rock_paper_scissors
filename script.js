let computerPlay = () => {
    let rand = Math.floor(Math.random() * 2);
    let result = '';
    if(rand === 0) {
        result = 'Rock';
    }
    else if(rand === 1) {
        result = 'Paper';
    }
    else {
        result = 'Scissors';
    }
    return result;
}

console.log(computerPlay());