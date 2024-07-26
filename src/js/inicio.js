
document.getElementById("btn_IniciarSesion").addEventListener("click",IniciarSesion);


//variables//

var Contenedor_Login_Register = document.querySelector(".Contenedor_Login_Register");

var formulario__login = document.querySelector(".formulario__login");

var formulario__Registro = document.querySelector(".formulario__Registro");

var caja__traseraLogin = document.querySelector(".caja__traseraLogin");

var caja__traseraRegistrar = document.querySelector(".caja__traseraRegistrar");



const Loginjs = document.querySelector('#Loginjs')      
Loginjs.addEventListener('submit', (e) =>{
    e.preventDefault()
    const CorreoE = document.querySelector ('#CorreoE').value;
    const Contraseña1 = document.querySelector ('#Contraseña1').value;
    const Users = JSON.parse(localStorage.getItem('users')) || []
    
    const UsuarioValido = Users.find(user => user.CorreoE === CorreoE && user.Contraseña1 === Contraseña1);
    if (!UsuarioValido) {
        return alert('El correo o la contraseña no son validos!');
    };
    
    alert (`Bienvenido ${UsuarioValido.Usuario1}`);

    window.location.href = 'galeria.html';
    
});
