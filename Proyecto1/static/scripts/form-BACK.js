
// following : https://www.learnwithjason.dev/blog/get-form-values-as-json/

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);
    //para pasarlo a JSON que asi lo ocupamos en el API de notros
    const formJSON = Object.fromEntries(data.entries());

    //nota: Tengo problema con lo siguente , con "const" tampoco sirve .. devuelve Object 
    // mentira ya me sirvio.. pero en windows alert tengo que poner value NO {value} como viene en el ejemplo de la pagina
    //const value = data.get('name');
    const value = Object.fromEntries(data.entries());

    // temporary - solo para imprimir 

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);

    // Lo siguiente es de postman - JavaScript - Jquery


   
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

var settings = {
    "url": "http://192.168.0.7:5000/pais/",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "application/json"
    },
    // trato de usar la misma funcion de arriba
    "data": JSON.stringify(formJSON, null, 2),
};

$.ajax(settings).done(function (response) {
    console.log(response);
});