let button = document.querySelector("button");
button.addEventListener("click", function(){
    let inputValue1 = document.getElementById("main-1").value;
    let inputValue2 = document.getElementById("main-2").value;

    document.getElementById("main-1").value = inputValue2;
    document.getElementById("main-2").value = inputValue1;
})