const url = "https://api-colombia.com/api/v1/TypicalDish";

async function obtenerPlatos() {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error al consultar la API");
        }

        const platos = await respuesta.json();

        const lista = document.getElementById("lista-platos");

        platos.forEach((plato) => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const nombre = document.createElement("h3");
        nombre.textContent = plato.name;

        const descripcion = document.createElement("p");
        descripcion.textContent = plato.description;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(descripcion);
        
        lista.appendChild(tarjeta);
    });

        console.log(platos);
        console.log("Total de platos:", platos.length);

    } catch(error) {
        console.log("Ocurrió un error:", error);
    }
}

obtenerPlatos();
