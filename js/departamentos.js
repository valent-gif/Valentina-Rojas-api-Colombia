const url = "https://api-colombia.com/api/v1/Department";

async function obtenerDepartamentos() {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error("Error al consultar la API");
        }
        const departamentos = await respuesta.json();
        const respuestaRegiones = await fetch("https://api-colombia.com/api/v1/Region");
        if (!respuestaRegiones.ok) {
            throw new Error("Error al consultar las regiones");
        }
        
        const regiones = await respuestaRegiones.json();
        console.log("Regiones:", regiones);

        const lista = document.getElementById("lista-departamentos");
        const mensajeCarga = document.getElementById("mensaje-carga");
        const mensajeError = document.getElementById("mensaje-error");
        const conteo = document.getElementById("conteo-regiones");
        conteo.textContent = "Total de departamentos: " + departamentos.length;
        departamentos.forEach((departamento) => {
            const regionDepartamento = regiones.find((region) => {
                return region.id === departamento.regionId;
            });

            const region = document.createElement("p");
            region.textContent = "Región: " + (
                regionDepartamento ? regionDepartamento.name : "No disponible"
            );
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
            tarjeta.appendChild(region);
            
        });
        mensajeCarga.style.display = "none";
        console.log(departamentos);
        console.log("Total de departamentos; ", departamentos.length);
    } catch(error) {
    mensajeCarga.style.display = "none";

    mensajeError.textContent = "No se pudieron cargar los departamentos. Intenta nuevamente.";
    mensajeError.style.display = "block";

    console.log("Ocurrio un error: ", error);
}
}

obtenerDepartamentos();
