let button = document.querySelector("button");
let buttonBlock = document.getElementById("button-block");
let buttonUnblock = document.getElementById("button-unblock");
let squareRed = document.querySelector(".square-red");
let squareHidden = false;


// №1
// button.addEventListener("click", function(){
//     alert("Привет мир!");
// })

// №2
// button.addEventListener("click", function(){
//     document.querySelector(".input-main").value = "test@email.ru";
// })

// №3
// button.addEventListener("click", function(){
//    if (document.querySelector(".input-main").value == 0) {
//      alert("Вы ничего не ввели в поле");
//    } else {
//      alert("Вы ввели текст инпута");
//    }
// })

// №4
// button.addEventListener("click", function(){
//     let inputValue1 = document.getElementById("main-1").value;
//     let inputValue2 = document.getElementById("main-2").value;

//     document.getElementById("main-1").value = inputValue2;
//     document.getElementById("main-2").value = inputValue1;
// })

// №5
// buttonBlock.addEventListener("click", function(){
//     document.querySelector(".input-main").disabled = true;
// })

// buttonUnblock.addEventListener("click", function(){
//     document.querySelector(".input-main").disabled = false;
// })

// №6   
// button.addEventListener("click", function(){
//     if (squareHidden) {
//         document.querySelector(".square").hidden = false;
//         squareHidden = false;
//         button.innerHTML = "Скрыть квадрат";
//     } else {
//         document.querySelector(".square").hidden = true;
//         squareHidden = true;
//         button.innerHTML = "Показать квадрат";
//     }
// })

// №7
squareRed.addEventListener("hover", function(){
    squareRed.style.backgroundColor = '#008000';
})