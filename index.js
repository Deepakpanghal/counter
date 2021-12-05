    var number = document.getElementById('numbers');
    var increase = document.getElementById('increase');
    var decrease = document.getElementById('decrease');
    var numbers = 0;
 
       increase.addEventListener('click', () => {
        numbers++;
       number.innerHTML = numbers;
    })

        decrease.addEventListener('click', () => {
         numbers--;
        number.innerHTML = numbers;
    })