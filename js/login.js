function open_form(element,id){
    document.getElementById(id).style.display = 'block';
    document.getElementById(element).style.display = 'none';
}


const api = new Api();

document.getElementById('login').addEventListener('submit',function(e){
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    api.login(username,password);
})

document.getElementById('sing-up').addEventListener('submit',function(e){
    // e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const cedula = document.getElementById('cedula').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;
    const contresenhia = document.getElementById('contresenhia').value;

    const persona = new Person(
        nombre,
        cedula,
        correo,
        telefono,
        contresenhia
    );
    api.register(persona);

});


document.getElementById('hamburguesa').addEventListener('click',function(){
    this.classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
});
