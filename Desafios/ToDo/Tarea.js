
export default class Tarea {
    constructor(descripcion, container) {
        this.descripcion = descripcion
        this.container = container
        this.input = this.inputDescripcion()
        this.divTarea = this.createDiv()
    }

    inputDescripcion() {
        let input = document.createElement("input")
        input.classList.add("item-input")
        input.value = this.descripcion
        input.disabled = true
        return input
    }

    botonEditar() {
        let btn = document.createElement("button")
        btn.classList.add("boton-editar")
        btn.textContent = "🔒"

        btn.addEventListener("click", _ => {
            if (!this.input.disabled) {
                btn.textContent = "🔒"
            }
            else {
                btn.textContent = "🔓"
            }
            this.input.disabled = !this.input.disabled
        })

        return btn
    }

    botonRemover() {
        let btn = document.createElement("button")
        btn.classList.add("boton-remover")
        btn.textContent = "🗑️"

        btn.addEventListener("click", _ => {
            this.container.removeChild(this.divTarea)
        })

        return btn
    }

    createDiv() {
        let divTarea = document.createElement("div")
        divTarea.classList.add("item")

        divTarea.appendChild(this.input)
        divTarea.appendChild(this.botonEditar())
        divTarea.appendChild(this.botonRemover())

        this.container.appendChild(divTarea)
        return divTarea
    }
}