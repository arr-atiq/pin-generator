function getPin(){
    const random = Math.random()*10000;
    const pin = (random + '').split('.')[0];
    if(pin.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function pinGenerate(){
    const pinInput = document.getElementById("pin");
    pinInput.value = getPin();
}

