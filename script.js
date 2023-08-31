var number = document.getElementById('number,number-2');
var counter = 0;
setInterval(() => {
    if(counter == 2504){
        clearInterval();
    }

    else{
        counter += 1;
        document.getElementById('number').innerHTML = counter + '+';
    }
},1);


var number2 = document.getElementById('number2');
var count = 0;
setInterval(() => {
    if(count == 274){
        clearInterval();
    }

    else{
        count += 1;
        document.getElementById('number2').innerHTML = count + '+';
    }
},8);