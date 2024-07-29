
const evento = document.getElementById("evento")
const agregar = document.getElementById("agregar")
const contenedorEventos = document.getElementById("contenedorEventos")
console.log(contenedorEventos);
agregar.addEventListener("click",function () {
    

    let eventoA= evento.value

   let pEvento=document.createElement("p")

    pEvento.innerHTML=eventoA

    console.log(pEvento);










})









 