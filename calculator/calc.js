let divContainer = document.querySelector(' .calc-form .container');
let resultArea = document.querySelector(' .calc-result');

let calcForm = document.createElement('form');
calcForm.name = 'form';
calcForm.appendChild(resultArea);
divContainer.appendChild(calcForm);

let calcTitle = document.createElement('h3');
let calcContext = document.createTextNode("Re-Calc");
calcTitle.appendChild(calcContext);
calcForm.appendChild(calcTitle);


for(let i =0; i<10;i++){

    let calcNumbers = document.createElement('button');
    calcNumbers.className = "but";
    calcNumbers.value = `${i}`;

    let numberText = document.createTextNode([i]);
    calcNumbers.dataset.numbers = "number";
    calcNumbers.appendChild(numberText);
    calcForm.appendChild(calcNumbers);
}

let plusButton = document.createElement('button');
plusButton.className = "btn-plus";
let plusText = document.createTextNode('+');
plusButton.appendChild(plusText);
calcForm.appendChild(plusButton);

let subButton = document.createElement('button');
subButton.className = "btn-sub";
let subText = document.createTextNode('-');
subButton.appendChild(subText);
calcForm.appendChild(subButton);

let multButton = document.createElement('button');
multButton.className = "btn-multy";
let multyText = document.createTextNode('x');
multButton.appendChild(multyText);
calcForm.appendChild(multButton);

let modlusButton = document.createElement('button');
modlusButton.className = "btn-mod";
let modlusText = document.createTextNode("%");
modlusButton.appendChild(modlusText);
calcForm.appendChild(modlusButton);

let decimalButton = document.createElement('button');
decimalButton.className = "btn-deci";
let decimalText = document.createTextNode(".");
decimalButton.appendChild(decimalText);
calcForm.appendChild(decimalButton);

let clearOneNumber = document.createElement('button');
clearOneNumber.className = "btn-CON";
let clearOneNumberText = document.createTextNode("c");
clearOneNumber.appendChild(clearOneNumberText);
calcForm.appendChild(clearOneNumber);

let divisionButton = document.createElement('button');
divisionButton.className = "btn-div";
let divisionText = document.createTextNode("\u00f7");
divisionButton.appendChild(divisionText);
calcForm.appendChild(divisionButton);

let equalButton = document.createElement('button');
equalButton.className = "btn-equal";
let equalText = document.createTextNode('=');
equalButton.appendChild(equalText);
calcForm.appendChild(equalButton);

let clearButton = document.createElement('button');
clearButton.className = "btn-clear";
clearButton.value = "c";
let clearText = document.createTextNode('Clear All');
clearButton.appendChild(clearText);
calcForm.appendChild(clearButton);


document.addEventListener('click',(e)=>{
    e.preventDefault();
    if(e.target.className == "but"){
        var arr = [0,1,2,3,4,5,6,7,8,9];
        insert(arr[e.target.value]);
    }
    
    if(e.target.className == "btn-plus"){
        insert('+');
    }

    if(e.target.className == "btn-sub"){
        insert('-');
    }

    if(e.target.className == "btn-multy"){
        insert('*');
        this.backGround.style = "red";
    }

    if(e.target.classname == "btn-div"){
        insert('/');
    }

    if(e.target.className == "btn-mod"){
        insert('%');
    }

    if(e.target.className == "btn-deci"){
        insert('.');
    }
    
    if(e.target.className == "btn-CON"){
        resultArea.innerHTML = resultArea.innerHTML.slice(0,resultArea.innerHTML.length-1);
    }

    if(e.target.className == "btn-clear"){
        resultArea.innerHTML = "";
    }

    if(e.target.className == "btn-equal"){
        resultArea.innerHTML = eval(resultArea.innerHTML);
    }else if(e.target.className == "btn-equal" || resultArea.innerHTML == ""){
        console.log("hry");
    }
})

function insert(num){
    resultArea.innerHTML += num;
}


