
function getData(){
    let typeGrab
    let radio = document.getElementsByName('selector')
    for (let i = 0; i < radio.length; i ++){
        if(radio[i].checked == true){
            typeGrab = radio[i].value
        }
    }

    let km = document.getElementById('km').value
    let time = document.getElementById('time').value

    if(typeGrab == "grabCar"){
        calculate(8000, 7500, 7000, 2000, km, time)
    }
    if(typeGrab == "grabSUV"){
        calculate(9000, 8500, 8000, 3000, km, time)
    }
    if(typeGrab == "grabBlack"){
        calculate(10000, 9500, 9000, 3500, km, time)
    }
}



function calculate(firstPrice, secondPrice, thirdPrice, timePrice, km, time){
    let price = 0
    if(km > 19){
        let priceThird = thirdPrice * (km - 19)
        price += priceThird
        km = 19
    }
    if(km > 1 && km <= 19){
        let priceSecond = secondPrice * (km - 1)
        price += priceSecond
        km = 1
    }

    if(km > 0 && km <= 1){
        let priceFirst = firstPrice * km
        price += priceFirst
    }
    if(time < 3){
        let priceTime = 0
        price += priceTime
    }else{
        let priceTime = timePrice*(Math.floor(time/3))
        price += priceTime
    }

    document.getElementById('xuatTien').innerHTML = price
    document.getElementById('divThanhTien').style.display = "block"
}

