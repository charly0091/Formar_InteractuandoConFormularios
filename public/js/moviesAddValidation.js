window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');
    const InputTitulo = document.querySelector('#title')
    const TitleError = document.querySelector('#titleError')

    const InputRating = document.querySelector('#rating')
    const RatingError = document.querySelector('#ratingError')

    const InputAwards = document.querySelector('#awards')
    const AwardsError = document.querySelector('#awardsError')

    const InputDate = document.querySelector('#release_date')
    const DateError = document.querySelector('#dateError')

    const InputLength = document.querySelector('#length')
    const LengthError = document.querySelector('#lengthError')

    const InputGenre = document.querySelector('#genre_id')
    const GenreError = document.querySelector('#genreError')

    const Form = document.querySelector('#form')
    const erroresForm = document.querySelector('.errores')

    //------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
    //-------------------DE REGISTRO DE PELÍCULAS------------------//   
    InputTitulo.focus()


    InputTitulo.addEventListener('blur', () => {
        InputTitulo.classList.remove('is-valid');
        TitleError.classList.remove('is-valid');
        switch (true) {
            case !InputTitulo.value.trim():
                TitleError.innerText = 'El campo es obligatorio';
                InputTitulo.classList.add('is-invalid');
                TitleError.classList.add('is-invalid');
                break;
            default:
                InputTitulo.classList.remove('is-invalid');
                InputTitulo.classList.add('is-valid');
                TitleError.classList.remove('is-invalid');
                TitleError.classList.add('is-valid');
                TitleError.innerText = 'Correcto';
                break;
        }
    })
    
    InputRating.addEventListener('blur', () => {
        InputRating.classList.remove('is-valid');
        RatingError.classList.remove('is-valid');
        switch (true) {
            case !InputRating.value.trim():
                RatingError.innerText = 'El campo es obligatorio';
                InputRating.classList.add('is-invalid');
                RatingError.classList.add('is-invalid');
                break;
            case InputRating.value < 0 || InputRating.value > 10:
                RatingError.innerText = 'Indicar el valor entre 0 y 10';
                InputRating.classList.add('is-invalid');
                RatingError.classList.add('is-invalid');
                break;
            default:
                InputRating.classList.remove('is-invalid');
                InputRating.classList.add('is-valid');
                RatingError.classList.remove('is-invalid');
                RatingError.classList.add('is-valid');
                RatingError.innerText = 'Correcto';
                break;
        }
    })

    InputAwards.addEventListener('blur', () => {
        InputAwards.classList.remove('is-valid');
        AwardsError.classList.remove('is-valid');
        switch (true) {
            case !InputAwards.value.trim():
                AwardsError.innerText = 'El campo es obligatorio';
                InputAwards.classList.add('is-invalid');
                AwardsError.classList.add('is-invalid');
                break;
            case InputAwards.value < 0 || InputAwards.value > 10:
                AwardsError.innerText = 'Indicar el valor entre 0 y 10';
                InputAwards.classList.add('is-invalid');
                AwardsError.classList.add('is-invalid');
                break;
            default:
                InputAwards.classList.remove('is-invalid');
                InputAwards.classList.add('is-valid');
                AwardsError.classList.remove('is-invalid');
                AwardsError.classList.add('is-valid');
                AwardsError.innerText = 'Correcto';
                break;
        }
    })

    InputDate.addEventListener('blur', () => {
        InputDate.classList.remove('is-valid');
        DateError.classList.remove('is-valid');
        switch (true) {
            case !InputDate.value.trim():
                DateError.innerText = 'El campo es obligatorio';
                InputDate.classList.add('is-invalid');
                DateError.classList.add('is-invalid');
                break;
            default:
                InputDate.classList.remove('is-invalid');
                InputDate.classList.add('is-valid');
                DateError.classList.remove('is-invalid');
                DateError.classList.add('is-valid');
                DateError.innerText = 'Correcto';
                break;
        }
    })

    InputLength.addEventListener('blur', () => {
        InputLength.classList.remove('is-valid');
        LengthError.classList.remove('is-valid');
        switch (true) {
            case !InputLength.value.trim():
                LengthError.innerText = 'El campo es obligatorio';
                InputLength.classList.add('is-invalid');
                LengthError.classList.add('is-invalid');
                break;
            case InputLength.value < 60 || InputLength.value > 360:
                LengthError.innerText = 'El campo es obligatorio';
                InputLength.classList.add('is-invalid');
                LengthError.classList.add('is-invalid');
                break;
            default:
                InputLength.classList.remove('is-invalid');
                InputLength.classList.add('is-valid');
                LengthError.classList.remove('is-invalid');
                LengthError.classList.add('is-valid');
                LengthError.innerText = 'Correcto';
                break;
        }
    })

    InputGenre.addEventListener('blur', () => {
        InputGenre.classList.remove('is-valid');
        GenreError.classList.remove('is-valid');
        switch (true) {
            case !InputGenre.value.trim():
                GenreError.innerText = 'El campo es obligatorio';
                InputGenre.classList.add('is-invalid');
                GenreError.classList.add('is-invalid');
                break;
            default:
                InputGenre.classList.remove('is-invalid');
                InputGenre.classList.add('is-valid');
                GenreError.classList.remove('is-invalid');
                GenreError.classList.add('is-valid');
                GenreError.innerText = 'Correcto';
                break;
        }
    })

    Form.addEventListener('submit', (e) => {
        e.preventDefault()
        
        const elementErrors = document.querySelectorAll(".is-invalid");
        console.log(elementErrors)

        const ERRORES = elementErrors.length > 0;
        if(ERRORES){
            erroresForm.classList.add('alert-warning')
            erroresForm.innerText = '';
            for (let i = 0; i < elementErrors.length; i++) {

                const fieldName = elementErrors[i].getAttribute('name');
                const labels = elementErrors[i].labels;
                const labelContent = labels && labels.length > 0 ? labels[0].textContent : fieldName;
                erroresForm.innerHTML += `${labelContent} ${elementErrors[i].innerText}\n`.replace('null','');
                erroresForm.innerHTML += '<br>';
            }
        }else{
            alert('La validación fué exitosa')
            Form.submit()
            
        }
    })
    
}