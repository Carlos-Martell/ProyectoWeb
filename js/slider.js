(function(){

    const sliders= [...document.querySelectorAll('.testimony__body')];
    const buttonNext=document.querySelector('#next');
    const buttonBefore= document.querySelector('#before');
    let value;

    buttonNext.addEventListener ('click', ()=>{
        changePosition(1);

    })

    buttonBefore.addEventListener ('click', ()=>{
        changePosition(-1);
    })

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if(value === sliders.length+1 || value === 0){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1]. classList.add('testimony__body--show');
 
    }


    







})();


document.addEventListener('DOMContentLoaded', function() {
    const botonesVerMas = document.querySelectorAll('.plan__cta');

    botonesVerMas.forEach(boton => {
        boton.addEventListener('click', function(event) {
            event.preventDefault(); // Evita el comportamiento predeterminado del enlace

            const descripcion = this.nextElementSibling;

            // Alternar la visibilidad de la descripción
            if (descripcion.style.display === 'none' || descripcion.style.display === '') {
                descripcion.style.display = 'block';
            } else {
                descripcion.style.display = 'none';
            }
        });
    });
});


