















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
