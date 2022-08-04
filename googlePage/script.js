function showicon() {
    var intext = document.querySelector(".inputField").value;
    var cross = document.querySelector(".icon");

    if(intext.lenght <=0) {
        document.body.classList.remove("active");
    }
    else {
        document.body.classList.add("active");
    }

    cross.addEventListener("click",() => {
        document.querySelector(".inputField").value ="";
        document.body.classList.remove("active");
    })
} 