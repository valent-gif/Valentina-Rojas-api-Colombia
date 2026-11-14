const url = "https://api-colombia.com/api/v1/Department";

async function obtenerDepartamentos() {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error("Error al consultar la API");
        }
        const departamentos = await respuesta.json();
        console.log(departamentos);
        console.log("Total de departamentos; ", departamentos.length);
    } catch(error) {
        console.log("Ocurrio un error: ", error);
    }
}

obtenerDepartamentos();