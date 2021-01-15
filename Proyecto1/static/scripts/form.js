
// following : https://www.learnwithjason.dev/blog/get-form-values-as-json/
var data
var formJSON 
function handleSubmit(event) {
    event.preventDefault();

    data = new FormData(event.target);
    //para pasarlo a JSON que asi lo ocupamos en el API de notros
    formJSON = Object.fromEntries(data.entries());

    //nota: Tengo problema con lo siguente , con "const" tampoco sirve .. devuelve Object 
    // mentira ya me sirvio.. pero en windows alert tengo que poner value NO {value} como viene en el ejemplo de la pagina
    //const value = data.get('name');
   // const value = Object.fromEntries(data.entries());

    // temporary - solo para imprimir 

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(formJSON, null, 2);
    callAPIforCrear()
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

// Lo siguiente es de postman - JavaScript - Jquery

function callAPIforCrear(){
    var settings = {
        "url": "http://192.168.0.7:5000/pais/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            
        },
        // trato de usar la misma funcion de arriba
        "data": JSON.stringify(formJSON, null, 2),
    };

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

//const formDelete = document.querySelector('clase');
//formDelete.addEventListener('submit', handleSubmit);

$("#deleteButton").click(function () {
   // var $row = $(this).closest("tr");    // Find the row
  //  var $text = $row.find(".nr").text(); // Find the text

    // Let's test it out
    alert('presionado');
    console.log('presionado')
});