const nums = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator");
const clear = document.querySelector("#clear");
var display = document.querySelector(".text");
let equation = [];
let operations = [];

for(let i = 0; i < nums.length; i++){
    nums[i].addEventListener("click", function(e){
        console.log(display.classList.contains("result"))
        if( display.classList.contains("result")){
            let result = display.innerHTML;
            equation.splice(0,2);
            equation.push(result);
            display.classList.remove("result")
            display.innerHTML = '';
        }
        display.innerHTML += e.target.innerHTML;
    })
}

for(let i = 0; i < operators.length; i++){
    operators[i].addEventListener("click", function(e){
        if( display.classList.contains("result")){
            let result = display.innerHTML;
            equation.splice(0,2);
            equation.push(result);
            display.classList.remove("result")
            display.innerHTML = '';
        }
        let symbol = e.target.innerHTML;
        operate(symbol);
    })
}

clear.addEventListener("click", clearCalc);


function clearCalc(){
    display.innerHTML = "";
    equation = [];
    display.classList.remove("result")
}

function add(num1, num2){
    let result = parseFloat(num1) + parseFloat(num2);
    console.log(equation)
    display.classList.add("result");
    console.log(display.classList.contains("result"))
    display.innerHTML = Math.round(result * 10) / 10;;
}

function subtract(num1, num2){
    let result = num1 - num2;
    console.log(equation)
    display.classList.add("result");
    console.log(display.classList.contains("result"))
    display.innerHTML = Math.round(result * 10) / 10;;
}

function mutliply(num1, num2){
    let result = num1 * num2;
    console.log(equation)
    display.classList.add("result");
    console.log(display.classList.contains("result"))
    display.innerHTML = Math.round(result * 10) / 10;;
}

function divide(num1, num2){
    let result = num1 / num2;
    console.log(equation)
    display.classList.add("result");
    console.log(display.classList.contains("result"))
    display.innerHTML = Math.round(result * 10) / 10;
}

function operate(operation){


    if( operation == "=" && equation.length < 1){
        clearCalc();
    }

    if(operation == "=" && display.classList.contains('result')){
        operations = [];
    }

    
    if(operation != "="){
        operations.push(operation)
    }

    console.log(display.innerHTML == "")
    if(display.innerHTML != ""){
        equation.push(parseFloat(display.innerHTML));
    }

    console.log(equation)
    display.innerHTML = "";
    console.log(operations)
    if(equation.length > 1){
        console.log(operations[0])
        switch(operations[0]){
            case "*":
                operations.splice(0,1)
                mutliply(equation[0], equation[1]);
                break;
            case "/":
                operations.splice(0,1)
                divide(equation[0], equation[1]);
                break;
            case "-":
                operations.splice(0,1)
                subtract(parseFloat(equation[0]), parseFloat(equation[1]));
                break; 
            case "+":
                operations.splice(0,1)
                add(equation[0], equation[1]);
                break;       
        }
    }
}

