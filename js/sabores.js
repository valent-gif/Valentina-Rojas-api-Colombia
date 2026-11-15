const url = "https://api-colombia.com/api/v1/TypicalDish";

async function obtenerPlatos() {
    const mensajeCarga = document.getElementById("mensaje-carga");
    const mensajeError = document.getElementById("mensaje-error");
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error al consultar la API");
        }

        const platos = await respuesta.json();
        const conteo = document.getElementById("conteo-platos");
        conteo.textContent = "Total de platos: " + platos.length;   
        console.log("Datos del primer plato:", platos[0]);
        console.log("Propiedades:", Object.keys(platos[0]));
        const lista = document.getElementById("lista-platos");


        platos.slice(0, 20).forEach((plato) => {
        const departamento = document.createElement("p");
        departamento.textContent = "Departamento: " + (
        plato.department ? plato.department.name : "No disponible"
        );


        const mensajeCarga = document.getElementById("mensaje-carga");
        mensajeCarga.style.display = "none";
        const ingredientes = document.createElement("p");
        ingredientes.textContent = "Ingredientes: " + plato.ingredients;

        const imagen = document.createElement("img");
        imagen.src = plato.imageUrl;
        imagen.alt = plato.name;

        const tarjeta = document.createElement("div");
        tarjeta.classList.add("tarjeta");

        const nombre = document.createElement("h3");
        nombre.textContent = plato.name;

        const descripcion = document.createElement("p");
        descripcion.textContent = plato.description;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(descripcion);
        tarjeta.appendChild(departamento);
        lista.appendChild(tarjeta);
        tarjeta.appendChild(ingredientes);
        tarjeta.appendChild(imagen);    
    });

        console.log(platos);
        console.log("Total de platos:", platos.length);

    } catch(error) {
        console.log("Ocurrió un error:", error);
    }
}

obtenerPlatos();