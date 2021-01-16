
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

    //llama el API para guarda el dato
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

/*
function addEventListener(event) {
    event.preventDefault();
    var $row = $(this).closest('tr');
    var $text = $row.find('.nr').text();
    alert("le di click")

}

const delBoton = document.getElementById('delBoton');
delBoton.addEventListener('click', addEventListener)
*/

// Como costo! element me pasa el elemento (boton!) que se esta haciendo click en ese momento
function delPais(element) {
    var idTxt = $(element).closest('tr').find('.nr').text();
    
    //alert(idTxt)
   
    //Listo,ahora a borrarlo!!
    CallAPIforBorrar(idTxt)

}

function delCiudad(element) {
    var idTxt = $(element).closest('tr').find('.nm').text();
    //Nota: Obtengo el parametro asi porque aunque con el request lo estoy pasando desde views, una vez en el html no se como pasarlo a la funcion onclick
    let params = new URLSearchParams(location.search);
    var id2 = params.get('id');
    alert(idTxt)

    //alert(idTxt)

    //Listo,ahora a borrarlo!!
    //CallAPIforBorrarCiudad(idTxt)

}

function CallAPIforBorrarCiudad(id) {
    var settings = {
        "url": "http://192.168.0.7:5000/pais/" + id + "/",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        //"data": JSON.stringify({ "cod_iso": "JP", "nombre": "Japon" }),
    };
    console.log(settings)

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function CallAPIforBorrar(idciudad, idpais) {
    var settings = {
        "url": "http://192.168.0.7:5000/pais/" + idpais + "/",
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        //"data": JSON.stringify({ "cod_iso": "JP", "nombre": "Japon" }),
    };
    console.log(settings)
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function mostrarCiudades(element) {
    var idTxt = $(element).closest('tr').find('.nr').text();

    //alert(idTxt)
    window.location.href = 'ciudadesPais?id=' + idTxt;

    
}

// vamos a probar on load.. el problema es que solo lo ocupo para una variable

