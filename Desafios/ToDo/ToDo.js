
const inputField = document.querySelector("input")
const btnAgregar = document.querySelector(".boton-agregar")

const contenedorTareas = document.querySelector(".container")

btnAgregar.addEventListener("click", _ => {
    if (inputField.value.length > 0) {
        let tarea = new Tarea(inputField.value, contenedorTareas)
        inputField.value = ""
    }
})