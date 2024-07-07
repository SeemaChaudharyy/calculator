(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');

    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let val = this.textContent;
            if(val != '='){
                screen.value += val;
            }
        });
    });

    equal.addEventListener('click', function(e) {
         if(screen.value === '') {
            screen.value = "";
        } else{
            let answer = eval(screen.value);
            screen.value = answer;
        }
    })

    clear.addEventListener('click', function(e) {
        screen.value = "";
    })
})();
