const valorTicket = 200;

let   descuentoEstudiante = 80;
let   descuentoTrainee    = 50;
let   descuentoJunior     = 15;

let   nombre              = document.getElementById("nombre");
let   apellido            = document.getElementById("apellido");
let   mail                = document.getElementById("floatingInput");
let   cantidadTicket      = document.getElementById("validationCustom03");
let   categoriaTicket     = document.getElementById("validationCustom04");

const mailValido = mail => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
}

function ClaseError()   {
    let x = document.querySelectorAll(".form-select, .form-control");
    let i;
    for (i = 0; i < x.length; i++)  {
        x[i].classList.remove("is-ivalid");
    }
}

function ResetTotalAPagar() {
    ClaseError();
    totalPago.innerHTML = "";
}

function TotalAPagar()  {

    ClaseError();

    if  (nombre.value === "")   {
        nombre.classList.add("is-ivalid");
        nombre.focus();
        alert("Por favor, escribí tu nombre");
        return;
    }

    if  (apellido.value === "")   {
        apellido.classList.add("is-ivalid");
        apellido.focus();
        alert("Por favor, escribí tu apellido");
        return;
    }

    if  (mail.value === "")   {
        mail.classList.add("is-ivalid");
        mail.focus();
        alert("Por favor, escribí tu mail");
        return;
    }

    if  (!mailValido(mail.value))    {
        mail.classList.add("is-ivalid");
        mail.focus();
        alert("Por favor, escribí un email válido");
        return;
    }

    if  ((cantidadTicket.value == 0) || (isNaN(cantidadTicket.value)))  {
        cantidadTicket.classList.add("is-ivalid");
        cantidadTicket.focus();
        alert("Por favor, ingrese una cantidad");
        return;
    }

    if  (categoriaTicket.value == "") {
        categoriaTicket.classList.add("is-ivalid");
        categoriaTicket.focus();
        alert("Por favor, elegí una categoría");
        return;
    }

    let totalValorTicket = (cantidadTicket.value) * valorTicket;

    switch(categoriaTicket.value)   {
        case 0:
            totalValorTicket = totalValorTicket;
            break;
        case 1:
            totalValorTicket = totalValorTicket - (descuentoEstudiante / 100 * totalValorTicket);
            break;
        case 2:
            totalValorTicket = totalValorTicket - (descuentoTrainee    / 100 * totalValorTicket);
            break;
        case 3:
            totalValorTicket = totalValorTicket - (descuentoJunior     / 100 * totalValorTicket);
            break;
    }

    totalPago.innerHTML = totalValorTicket;
}


button_resumen.addEventListener("click", TotalAPagar)
button_borrar.addEventListener("click", ResetTotalAPagar)