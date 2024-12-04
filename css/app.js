(function() {
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.btn-clear');
    let equal = document.querySelector('.btn-equal');
    
    // Button click event listener
    buttons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            if (value !== undefined) {
                screen.value += value;
            }
        });
    });
    
    // Equal button click event listener
    equal.addEventListener('click', function() {
        if (screen.value === '') {
            screen.value = "Please enter";
        } else {
            try {
                let answer = eval(screen.value); // Use eval cautiously!
                screen.value = answer;
            } catch (error) {
                screen.value = "Error";
            }
        }
    });
    
    // Clear button click event listener
    clear.addEventListener('click', function() {
        screen.value = "";
    });
})();
