let buttonHello = document.querySelector("#button-hello");
let buttonMail = document.querySelector("#button-mail");
let buttonInput = document.querySelector("#button-input");
let buttonSwap = document.querySelector("#button-swap");
let buttonHide = document.querySelector("#button-hide");
let buttonBlock = document.getElementById("button-block");
let buttonUnblock = document.getElementById("button-unblock");
let squareRed = document.querySelector(".square-red");
let backgroundSquares = document.querySelector(".background-squares");
let squareHidden = false;
let clicked = false;
let lastClicked;



// №1
buttonHello.addEventListener("click", function(){
    alert("Привет мир!");
})

// №2
buttonMail.addEventListener("click", function(){
    document.querySelector("#input-1").value = "test@email.ru";
})

// №3
buttonInput.addEventListener("click", function(){
   if (document.querySelector("#input-2").value == 0) {
     alert("Вы ничего не ввели в поле");
   } else {
     alert("Вы ввели текст инпута");
   }
})

// №4
buttonSwap.addEventListener("click", function(){
    let inputValue1 = document.getElementById("input-3").value;
    let inputValue2 = document.getElementById("input-4").value;

    document.getElementById("input-3").value = inputValue2;
    document.getElementById("input-4").value = inputValue1;
})

// №5
buttonBlock.addEventListener("click", function(){
    document.querySelector("#input-5").disabled = true;
})

buttonUnblock.addEventListener("click", function(){
    document.querySelector("#input-5").disabled = false;
})

// №6   
buttonHide.addEventListener("click", function(){
    if (squareHidden) {
        document.querySelector(".square").hidden = false;
        squareHidden = false;
        buttonHide.innerHTML = "Скрыть квадрат";
    } else {
        document.querySelector(".square").hidden = true;
        squareHidden = true;
        buttonHide.innerHTML = "Показать квадрат";
    }
})

// №7
squareRed.addEventListener("click", function(){
    squareRed.style.backgroundColor = '#008000';
    squareRed.style.boxShadow = 'inset 0 0 20px 5px rgba(0, 0, 0, 0.5)';
})

// №8
backgroundSquares.addEventListener("click", function(e){
    if (e.target == backgroundSquares){
        return;
    }
    e.target.style.backgroundColor = '#008000';
    e.target.style.boxShadow = 'inset 0 0 20px 5px rgba(0, 0, 0, 0.5)';
    if (clicked){
        lastClicked.style.backgroundColor = '#ff0000';
        lastClicked.style.boxShadow = '0 0 0 0';
        clicked = false;
    }
    lastClicked = e.target;
    clicked = true;
})

// №9
