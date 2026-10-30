let inputNum

function numType(inputNum){
    if (inputNum===0)
        console.log(`${inputNum} is a nutral number`);
    else if(inputNum>0)
    console.log(` ${inputNum} is a positive number`);
    else
        console.log(`${inputNum} is a negative number`);
}

numType(30)