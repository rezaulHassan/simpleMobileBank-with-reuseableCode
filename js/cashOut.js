document.getElementById('btn-cash-out').addEventListener('click', function(event){
    // event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin');
    if(pinNumber === 1234){
    const balance= getTextFieldValueById('account-balance');
    const newBalanceCashOut = balance - cashOut;
    // console.log(balance);
    document.getElementById('account-balance').innerText = newBalanceCashOut;
    }
    else{
        alert('failed to cash out');
    }

})