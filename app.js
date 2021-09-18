function letsGo(){
    const firstVehicale = document.getElementById('first-vehicale').value;
    const mainDiv = document.getElementById('main-div');
    const firstStep = document.getElementById('first-step');
    const secondStep = document.getElementById('second-step');


    if( firstVehicale != 'boat'){
        mainDiv.innerHTML=`
        <h1 style="font-size: 50px;">You lost</h1>
        `
    }
    if(firstVehicale == 'boat'){
        firstStep.style.display= "none";
        secondStep.style.display= "block";
    }
}
function lost(){
    const mainDiv = document.getElementById('main-div');
    mainDiv.innerHTML=`
        <h1 style="font-size: 50px;">You lost</h1>
        `
}

function secondGo(){
    const secondStep = document.getElementById('second-step');
    const thirdStep = document.getElementById('third-step');
    secondStep.style.display= "none";
    thirdStep.style.display= "block";
}
function finalStep(){
    const inputNumber = document.getElementById('input-number').value;
    const mainDiv = document.getElementById('main-div');
    const thirdStep = document.getElementById('third-step');
    const winner = document.getElementById('win')

    if( inputNumber != 9){
        mainDiv.innerHTML=`
        <h1 style="font-size: 50px;">You lost</h1>
        `
    }
    if(inputNumber == 9 ){
        thirdStep.style.display= "none";
        winner.style.display= "block";
    }
}
