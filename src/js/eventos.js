
const evento = document.getElementById("evento");

const agregar = document.getElementById("agregar");

const contenedorEventos = document.getElementById("contenedorEventos");

const palabra =document.getElementById("palabra");

console.log(contenedorEventos);

agregar.addEventListener("click",function () {
    
    palabra.innerHTML=evento.value

    let eventoA= evento.value

   let pEvento=document.createElement("p")
   

    pEvento.innerHTML=eventoA

    console.log(pEvento);

    contenedorEventos.appendChild(pEvento)
    







})









 