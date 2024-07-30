let btn = document.getElementById("b-inp")


btn.addEventListener("click",()=>{
    let input = document.getElementById("inp").value
    localStorage.setItem("nombre",input)

    console.log(localStorage.getItem("nombre"))
})