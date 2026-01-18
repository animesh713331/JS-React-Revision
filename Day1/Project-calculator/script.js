function getInputs(){
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const resultDiv = document.getElementById("result");

    if(num1 === " " | num2 === " "){
        resultDiv.innerHTML="Please Enter Both Numbers";
        resultDiv.classList.add("error");
        return null;
    }

    return{
        a:Number(num1),
        b:Number(num2),
        resultDiv
    };
}

function add(){
    const data = getInputs();
    if(!data) return;

    const result = data.a+data.b;
    showResult(result);
}

function subtract(){
    const data = getInputs();
    if(!data) return;

    const result = data.a-data.b;
    showResult(result);
}

function multiply(){
    const data = getInputs();
    if (!data) return;

    const result = data.a*data.b;
    showResult(result);
}

function divide(){
    const data = getInputs();
    if (!data) return;

    if (data.b === 0){
        data.resultDiv.innerHTML ="Cannot divivde by zero";
        data.resultDiv.classList.add("error");
        return;
    }
    const result = data.a/data.b;
    showResult(result);
}

function showResult(value) {
    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("error");
    resultDiv.innerHTML = `Result: ${value}`;
}