let numbers = document.getElementsByClassName('number');
let operators = document.getElementsByClassName('operator');
let results = document.getElementById('result');

        for (let i = 0; i < numbers.length; i++) {
            numbers[i].addEventListener('click', () => {
                results.value += numbers[i].value;
            })
        }

        for(let i = 0; i < operators.length; i++){
                operators[i].addEventListener('click', () => {
                    results.value += operators[i].value;
                })
            }

let equal = document.getElementById('equal');

equal.addEventListener('click',() => {
    let expression = results.value;
    let total = eval(expression);
    results.value = total;
})

document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById("result");
    let backButton = document.getElementById('back');
    
    backButton.addEventListener('click', function() {
        console.log("Back button clicked!"); 
        let currentValue = input.value;
        if (currentValue.length > 0) {
            input.value = currentValue.slice(0, -1);
        }
    });
    
    let operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
        operators[i].addEventListener("click", function() {
            if (this.value === "C") {
                input.value = "";
            }
        });
    }
});


let percentageButton = document.getElementById('percentage');

percentageButton.addEventListener('click', () => {
    let currentValue = parseFloat(result.value); 
    let percentageValue = currentValue / 100; 
    results.value = percentageValue; 
});

const resultField = document.getElementById('result');
const toggleSignButton = document.getElementById('toggleSign');

toggleSignButton.addEventListener('click', function() {
    const currentValue = parseFloat(resultField.value);
    resultField.value = -currentValue;
});
