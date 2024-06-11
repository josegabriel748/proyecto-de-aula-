

class Api{
    constructor(){
        this.db = "database";
        this.auth = "auth";
        this.myObject = []


    }
    register(person){
        const datos_api = localStorage.getItem(this.db);
        const parrafo = document.getElementById('mensaje');

        if(datos_api == null){
            localStorage.setItem(this.db,JSON.stringify([person]))
            parrafo.innerText = "Creado con exito";
            parrafo.style.display='grid';

        }else{
            this.myObject = JSON.parse(datos_api);
            let exist = false;
            this.myObject.filter(persona=>{
                if(persona.cedula == person.cedula) exist = true;
            })
            if(exist) parrafo.innerText = 'Ya existe ese usuario';
            else{
                this.myObject.push(person)
                localStorage.setItem(this.db,JSON.stringify(this.myObject));
            }
        }
        setInterval(function(){
            parrafo.style.display = 'none';
            location.reload();
        },5000);

    }
    login(username,password){
        const parrafo = document.getElementById('mensaje');

        const datos_api = localStorage.getItem(this.db);
        if(datos_api == null){
            alert("No existe este usuario");
            parrafo.style.display='grid';
        }else{
            this.myObject = JSON.parse(datos_api);
            let valid = false;
            this.myObject.filter(persona=>{
            if(persona.cedula == username && persona.contrasenhia == password) valid = true;
        })
            if(valid){
                this.auth = "activo";
                localStorage.setItem(this.auth,JSON.stringify(true));
                location.href = '/';
            }else alert('Es inposible iniciar sesión con esas credenciales')
        }
       
    }
}