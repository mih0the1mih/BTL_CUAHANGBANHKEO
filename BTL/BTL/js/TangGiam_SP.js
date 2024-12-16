let amountElement = document.getElementById('amount');
    let amount = amountElement.value;
    //console.log(amount);
    let render = (amount) =>{
        amountElement.value = amount
    }

    // handlePlus
    let handlePlus = () =>{
        amount++
        render(amount);
    }
    //Handle minus
    let handleMinus = () =>{
        if(amount >1)
            amount--;
        render(amount);
    }

    amountElement.addEventListener('input', () => {
        amount = amountElement.value;
        //console.log(amount);
        amount = parseInt(amount);
        amount = (isNaN(amount) || amount ==0)?1:amount;
        render(amount);
});