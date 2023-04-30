
function weatherApiUrl(ciudad){
    return `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=fdd533266e28101881f610f2b8f1ebe1`
}

function cargarCiudad(ciudad){
    $.getJSON(weatherApiUrl(ciudad))
    .done(data=>{
        ciudad_carta.textContent = input_ciudad.value
        temp_field.textContent = Math.floor(data.main.temp-272.15)
        img_carta.setAttribute("src",`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
        info_carta.textContent = data.weather[0].description
        input_ciudad.value = ""
        console.info(data)
    }).fail(error=>{
        alert("ERROR: La ciudad ingresada no es valida.")
    })
}

let ciudad_carta = document.querySelector(".ciudad-carta")
let temp_field = document.querySelector("#temp-field")
let img_carta = document.querySelector(".img-carta")
let info_carta = document.querySelector(".info-carta")

let input_ciudad = document.querySelector(".input-ciudad")
const boton_enviar = document.querySelector(".boton-enviar")

boton_enviar.addEventListener("click",_=>{
    if(input_ciudad.value != ""){
        cargarCiudad(input_ciudad.value)
    }
    else{
        alert("ERROR: Ingrese el nombre de alguna ciudad")
    }
})

cargarCiudad("Buenos Aires")

//let temp = data.main.temp-272.15
//let info = data.weather[0].description