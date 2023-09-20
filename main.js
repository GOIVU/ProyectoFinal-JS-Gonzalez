/* 

alert(`¡Bienvenid@ a Apple World!\n\nSomos el presente creando el futuro. Presiona aceptar para tener acceso a todo lo nuevo y lo que está por venir.`);

const nombre = prompt("Ingrese su nombre.");

if (nombre !== "") {
    alert(`Hola ${nombre}, estamos felices de que estés aquí con nosotros.`);
} else {
    alert("Por favor, ingrese un nombre válido.");
}

// Almacenamiento en localStorage
localStorage.setItem('nombre', nombre);

alert("Te invitamos a nuestra tienda para elegir lo último en tecnología.");

for (let asesor = 1; asesor <= 3; asesor++) {
    let nombreCliente = prompt("Vuelva a ingresar su nombre y se le asignará un asesor.");
    alert(`${nombreCliente}, su asesor es ${asesor}.`);
}

let categoria = "";

while (categoria !== "1" && categoria !== "2") {
    categoria = prompt("Ingrese '1' para ver MacBooks o '2' para ver iPhones").toLowerCase();

    if (categoria === "1") {
        elegirMacBook();
    } else if (categoria === "2") {
        elegiriPhone();
    } else {
        alert("Por favor, ingrese una opción válida ('1' o '2').");
    }
}

function elegirMacBook() {
    let macbookElegido = "";

    while (macbookElegido !== "1" && macbookElegido !== "2" && macbookElegido !== "3") {
        macbookElegido = prompt("Seleccione su MacBook: Ingrese 1 para 'MacBook Air', 2 para 'MacBook Pro' o 3 para 'MacBook Pro 16 pulgadas'").toLowerCase();

        if (macbookElegido === "1") {
            alert("Ha elegido MacBook Air. Explore nuestras opciones disponibles.");
        } else if (macbookElegido === "2") {
            alert("Ha elegido MacBook Pro. Descubra nuestras variedades.");
        } else if (macbookElegido === "3") {
            alert("Ha elegido MacBook Pro 16 pulgadas. Vea nuestras características destacadas.");
        } else {
            alert("Por favor, seleccione una opción válida ('1' para 'MacBook Air', '2' para 'MacBook Pro' o '3' para 'MacBook Pro 16 pulgadas').");
        }
    }
    // Almacenar elección en localStorage
    localStorage.setItem('categoria', 'MacBook');
    localStorage.setItem('eleccion', macbookElegido);
}

function elegiriPhone() {
    let iphoneElegido = "";

    while (iphoneElegido !== "1" && iphoneElegido !== "2" && iphoneElegido !== "3") {
        iphoneElegido = prompt("Seleccione su iPhone: Ingrese 1 para 'iPhone 14', 2 para 'iPhone 14 Pro' o 3 para 'iPhone 14 Pro Max'").toLowerCase();

        if (iphoneElegido === "1") {
            alert("Ha elegido iPhone 14. Descubra sus características.");
        } else if (iphoneElegido === "2") {
            alert("Ha elegido iPhone 14 Pro. Explore sus funciones avanzadas.");
        } else if (iphoneElegido === "3") {
            alert("Ha elegido iPhone 14 Pro Max. Descubra su rendimiento excepcional.");
        } else {
            alert("Por favor, seleccione una opción válida ('1' para 'iPhone 14', '2' para 'iPhone 14 Pro' o '3' para 'iPhone 14 Pro Max').");
        }
    }
    // Almacenar elección en localStorage
    localStorage.setItem('categoria', 'iPhone');
    localStorage.setItem('eleccion', iphoneElegido);
}

// Obtener datos almacenados en localStorage
const categoriaAlmacenada = localStorage.getItem('categoria');
const eleccionAlmacenada = localStorage.getItem('eleccion');

if (categoriaAlmacenada && eleccionAlmacenada) {
    alert(`Usted ha elegido la categoría ${categoriaAlmacenada} y la opción ${eleccionAlmacenada}.`);
} 


 */



// Función para mostrar un mensaje de bienvenida
function mostrarBienvenida() {
    return new Promise((resolve) => {
        alert(`¡Bienvenid@ a Apple World!\n\nSomos el presente creando el futuro. Presiona aceptar para tener acceso a todo lo nuevo y lo que está por venir.`);
        resolve();
    });
}

// Función para obtener el nombre del usuario
function obtenerNombre() {
    return new Promise((resolve) => {
        const nombre = prompt("Ingrese su nombre.");

        if (nombre !== null && nombre !== "") {
            alert(`Hola ${nombre}, estamos felices de que estés aquí con nosotros.`);
            localStorage.setItem('nombre', nombre);
            resolve(nombre);
        } else {
            alert("Por favor, ingrese un nombre válido.");
            obtenerNombre().then(resolve);
        }
    });
}

// Función para mostrar el mensaje de asesoramiento
function mostrarAsesoramiento() {
    for (let asesor = 1; asesor <= 3; asesor++) {
        const nombreCliente = prompt("Vuelva a ingresar su nombre y se le asignará un asesor.");
        if (nombreCliente !== null) {
            alert(`${nombreCliente}, su asesor es ${asesor}.`);
        } else {
            break; // Salir del bucle si el usuario presiona "Cancelar"
        }
    }
}

// Función para elegir la categoría (MacBook o iPhone)
function elegirCategoria() {
    return new Promise((resolve) => {
        let categoria = "";

        while (categoria !== "1" && categoria !== "2") {
            categoria = prompt("Ingrese '1' para ver MacBooks o '2' para ver iPhones").toLowerCase();

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
        }
        // Almacenar elección en localStorage
        localStorage.setItem('categoria', 'MacBook');
        localStorage.setItem('eleccion', macbookElegido);
    });
}

// Función para elegir un iPhone
function elegiriPhone() {
    return new Promise((resolve) => {
        let iphoneElegido = "";

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
        }
        // Almacenar elección en localStorage
        localStorage.setItem('categoria', 'iPhone');
        localStorage.setItem('eleccion', iphoneElegido);
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

// Función para cargar información adicional desde un servidor ficticio
function cargarInformacionAdicional() {
    return new Promise((resolve) => {
        // Simulación de una solicitud Fetch a un servidor ficticio
        fetch('https://api.ejemplo.com/informacion-adicional')
            .then(response => response.json())
            .then(data => {
                alert(`Información adicional: ${data.descripcion}`);
                resolve();
            })
            .catch(error => {
                console.error('Error al cargar información adicional:', error);
                resolve(); // Resolver la promesa incluso si hay un error
            });
    });
}

// Llamamos a las funciones en el orden adecuado utilizando promesas
mostrarBienvenida()
    .then(obtenerNombre)
    .then(mostrarAsesoramiento)
    .then(elegirCategoria)
    .then(cargarInformacionAdicional)
    .then(mostrarEleccion)
    .catch(error => {
        console.error('Error en la aplicación:', error);
    });