const url = "https://api-colombia.com/api/v1/TypicalDish";

async function obtenerPlatos() {
    try {
        const respuesta = await fetch(url);

        if (!respuesta.ok) {
            throw new Error("Error al consultar la API");
        }

        const platos = await respuesta.json();

        const lista = document.getElementById("lista-platos");




        console.log(platos);
        console.log("Total de platos:", platos.length);

    } catch(error) {
        console.log("Ocurrió un error:", error);
    }
}

obtenerPlatos();
