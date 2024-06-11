document.getElementById('hamburguesa').addEventListener('click',function(){
    this.classList.toggle('active');
    document.getElementById('nav').classList.toggle('active');
})



document.querySelectorAll('.nav li').forEach(function(cadaElemento){
    cadaElemento.addEventListener('click',function(){
        document.querySelectorAll('.nav li').forEach(function(elemento){
            if(elemento.classList.contains('focus'))elemento.classList.remove('focus');
        });
        cadaElemento.classList.add('focus');
        
    });
});

document.getElementById('eventos').onclick =('click',function(){
    this.children[1].classList.toggle('load');
})

document.getElementById('salir').onclick=()=>{
    localStorage.setItem('activo',JSON.stringify(false));
    location.reload();
}
window.addEventListener('load',function(){
    let isActive = false;
    const auth = this.localStorage.getItem('activo');
    if(auth != null) isActive = JSON.parse(auth);
    if(isActive){
        this.document.getElementById('salir').style.display = 'block';
        this.document.getElementById('eventos').style.display = 'block';
        this.document.getElementById('logn').style.display = 'none';
    }
    else{
        this.document.getElementById('salir').style.display = 'none';
        this.document.getElementById('login').style.display = 'block';
    }
})
window.addEventListener('scroll',()=>{
    const boton = document.getElementById('return');
    const altura_pagina = document.documentElement.scrollHeight;
    const altura_ventana = window.innerHeight;
    const porcentaje_scroll = (window.scrollY / (altura_pagina - altura_ventana) * 100);
    // const header = document.getElementById('header');
    // if(porcentaje_scroll > 5) header.style.position = 'fixed';

    if( porcentaje_scroll > 10){
        boton.style.display='flex';
        const nav = document.getElementById('nav');
        if(nav.classList.contains('active')) {
            nav.classList.remove('active');
            document.getElementById('hamburguesa').classList.toggle('active');
        }

    }
    else {
        boton.style.display='none';
        // header.style.position = 'initial';
    }
})


let indice = 0;
const izquierda = document.getElementById('izquierda');
const derecha = document.getElementById('derecha');
const slider = document.getElementById('bannerContainer');

izquierda.onclick =()=>{

    indice--;
    if(indice < 0) indice = 0;
    let porcentaje = ((100 / 6) * indice) * -1;
    slider.style.transform = `translateX(${porcentaje}%)`;
}

derecha.onclick =()=>{
    indice++;
    if(indice >= 5) indice = 5;
    let porcentaje = ((100 / 6) * indice) * -1;
    slider.style.transform = `translateX(${porcentaje}%)`;
}


document.getElementById('cotizar').onclick =()=>{
    document.getElementById('loanding').style.display = 'flex';
};

let cambio = true;
setInterval(function(){
    if(!cambio){
        document.title = "Bienvenidos";
        cambio = true;
    }else{
        document.title = "EventOptimizer";
        cambio = !cambio;

    }
},5000)