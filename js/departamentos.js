const url = "https://api-colombia.com/api/v1/Department";

async function obtenerDepartamentos() {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error("Error al consultar la API");
        }
        const departamentos = await respuesta.json();
        const lista = document.getElementById("lista-departamentos");
        const conteo = document.getElementById("conteo-regiones");
        conteo.textContent = "Total de departamentos: " + departamentos.length;
        departamentos.forEach((departamento) => {
            const tarjeta = document.createElement("div");
            tarjeta.classList.add("tarjeta");

            const nombre = document.createElement("h3");
            nombre.textContent = departamento.name;
            
            const description = document.createElement("p");
            description.textContent =departamento.description;

            tarjeta.appendChild(nombre);
            tarjeta.appendChild(description);

            const poblacion = document.createElement("p");
            poblacion.textContent = "Población: " + departamento.population;


            const superficie = document.createElement("p");
            superficie.textContent = "Superficie: " + departamento.surface + " km²";

            const municipios = document.createElement("p");
            municipios.textContent = "Municipios: " + departamento.municipalities;

            lista.appendChild(tarjeta);
            tarjeta.appendChild(description);
            tarjeta.appendChild(poblacion);
            tarjeta.appendChild(superficie);
            tarjeta.appendChild(municipios);

        });
        console.log(departamentos);
        console.log("Total de departamentos; ", departamentos.length);
    } catch(error) {
        console.log("Ocurrio un error: ", error);
    }
}

obtenerDepartamentos();
