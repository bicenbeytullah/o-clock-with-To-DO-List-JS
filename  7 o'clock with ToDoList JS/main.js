// <--- Time & Date Function --->

setInterval(() => {
    let time = document.querySelector(".time");
    let dates = document.querySelector(".dates");

    let date = new Date();
    let day = date.toDateString();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    time.textContent = h + ":" + m + ":" + s;
    dates.textContent = day;
        
});

// <--- ToDoList Function --->

let input = document.querySelector(".input");
let btn = document.querySelector(".btn");
let container = document.querySelector(".todocontainer");


btn.addEventListener("click", function () {
    let paragraf = document.createElement("p");
    paragraf.classList.add("paragrafLine");
    paragraf.innerText = input.value;
    input.value = " ";   
    container.appendChild(paragraf);

    paragraf.addEventListener("click", function () {
        paragraf.style.textDecoration = "line-through"; 
    });
    paragraf.addEventListener("dblclick", function () {
        container.removeChild(paragraf);  
    });
    console.log(paragraf.innerText);
});
