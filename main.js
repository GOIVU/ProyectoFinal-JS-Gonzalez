 // Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    return new Promise((resolve) => {
    
    const localStorageNombre = localStorage.getItem("nombre")
    if (!localStorageNombre) {
    alert(`¡Bienvenid@ a Apple World!\n\nSomos el presente creando el futuro. Presiona aceptar para tener acceso a todo lo nuevo y lo que está por venir.`);
        resolve();
    }
    });
} 

// Función para obtener el nombre del usuario
function obtenerNombre() {

    let nombre;

        const nombreStorage = localStorage.getItem("nombre");
        if (nombreStorage) {
            nombre = nombreStorage;
            return alert(`Bienvenid@ nuevamente ${nombre.toUpperCase()}`);
        } else {
            nombre  = prompt("Ingrese su nombre.");
        localStorage.setItem("nombre", `${nombre}` );
        return alert (`Hola ${nombre}, estamos felices de que estés aquí con nosotros.`)
        }
    }
/* 
// Función para mostrar el mensaje de asesoramiento
function mostrarAsesoramiento() {
    for (let asesor = 1; asesor <= 3; asesor++) {
        const nombreCliente = prompt("Ingrese si y se le asignará un asesor.");
        if (nombreCliente !== null) {
            alert(`${nombreCliente}, su asesor es ${asesor}.`);
        } else {
            break; // Salir del bucle si el usuario presiona "Cancelar"
        }
    }
}  */

// Función para elegir la categoría (MacBook o iPhone)
function elegirCategoria() {
    return new Promise((resolve) => {
        let categoria = "";

        while (categoria !== "1" && categoria !== "2") {
            categoria = prompt("Ingrese '1' para ver MacBooks o '2' para ver iPhones");

            if (categoria === "1") {
                elegirMacBook().then(resolve);
            } else if (categoria === "2") {
                elegiriPhone().then(resolve);
            } else if (categoria !== null) {
                alert("Por favor, ingrese una opción válida ('1' o '2').");
            } else {
                resolve(); // Resolver la promesa si el usuario presiona "Cancelar"
            }
        }
        localStorage.setItem('categoria', categoria);
    });
}

// Función para elegir un MacBook
function elegirMacBook() {
    return new Promise((resolve) => {
        let macbookElegido = "";

        while (macbookElegido !== "1" && macbookElegido !== "2" && macbookElegido !== "3") {
            macbookElegido = prompt("Seleccione su MacBook: Ingrese 1 para 'MacBook Air', 2 para 'MacBook Pro' o 3 para 'MacBook Pro 16 pulgadas'").toLowerCase();

            if (macbookElegido === "1") {
                alert("Ha elegido MacBook Air. Explore nuestras opciones disponibles.");
                resolve();
            } else if (macbookElegido === "2") {
                alert("Ha elegido MacBook Pro. Descubra nuestras variedades.");
                resolve();
            } else if (macbookElegido === "3") {
                alert("Ha elegido MacBook Pro 16 pulgadas. Vea nuestras características destacadas.");
                resolve();
            } else if (macbookElegido !== null) {
                alert("Por favor, seleccione una opción válida ('1' para 'MacBook Air', '2' para 'MacBook Pro' o '3' para 'MacBook Pro 16 pulgadas').");
            } else {
                resolve(); // Resolver la promesa si el usuario presiona "Cancelar"
            }
            localStorage.setItem('eleccion', macbookElegido);
        }
    });
}

// Función para elegir un iPhone
function elegiriPhone() {
    return new Promise((resolve) => {
        let iphoneElegido;

        while (iphoneElegido !== "1" && iphoneElegido !== "2" && iphoneElegido !== "3") {
            iphoneElegido = prompt("Seleccione su iPhone: Ingrese 1 para 'iPhone 14', 2 para 'iPhone 14 Pro' o 3 para 'iPhone 14 Pro Max'").toLowerCase();

            if (iphoneElegido === "1") {
                alert("Ha elegido iPhone 14. Descubra sus características.");
                resolve();
            } else if (iphoneElegido === "2") {
                alert("Ha elegido iPhone 14 Pro. Explore sus funciones avanzadas.");
                resolve();
            } else if (iphoneElegido === "3") {
                alert("Ha elegido iPhone 14 Pro Max. Descubra su rendimiento excepcional.");
                resolve();
            } else if (iphoneElegido !== null) {
                alert("Por favor, seleccione una opción válida ('1' para 'iPhone 14', '2' para 'iPhone 14 Pro' o '3' para 'iPhone 14 Pro Max').");
            } else {
                resolve(); // Resolver la promesa si el usuario presiona "Cancelar"
            }
            localStorage.setItem('eleccion', iphoneElegido); 
        }
    });
}

// Función para mostrar la elección almacenada
function mostrarEleccion() {
    const categoriaAlmacenada = localStorage.getItem('categoria');
    const eleccionAlmacenada = localStorage.getItem('eleccion');

    if (categoriaAlmacenada && eleccionAlmacenada) {
        alert(`Usted ha elegido la categoría ${categoriaAlmacenada} y la opción ${eleccionAlmacenada}.`);
    }
}

// Función para traer la informacion de una api
function traemosLaApi() {
    return new Promise((resolve) => {
        fetch("https://651ca2c635bd4107e3730171.mockapi.io/phoneapi/v1/productos")
            .then((response) => response.json())
            .then((data) => {
                data.forEach((item) => {
                    let div = document.createElement("div");
                    div.innerHTML = `
                    <h2>ID: ${item.id}<h2/>
                    <p>Nombre: ${item.nombre}<p/>
                    `;

                    document.body.append(div);
                });
                console.log("🚀 ~ file: main.js:133 ~ returnnewPromise ~ data:", data)                
                // alert(`Información adicional: ${data}`);
                resolve();
            })
            .catch(error => {
              //  console.error('Error al cargar información adicional:', error);
                resolve(); // Resolver la promesa incluso si hay un error
            });
    });
}

// Llamamos a las funciones en el orden adecuado utilizando promesas
mostrarBienvenida()
    .then(obtenerNombre())
//   .then(mostrarAsesoramiento())
    .then(elegirCategoria())
    .then(traemosLaApi())
    .then(mostrarEleccion())
    .catch(error => {
        console.error('Error en la aplicación:', error);
    }); 