let pacientes = [];

function registrarPaciente() {
    let nombre;
    do {
        nombre = prompt("Ingrese el nombre del paciente:").trim();
        if (!nombre || /[^a-zA-Z\s]/.test(nombre)) {
            alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        }   
    } while (!nombre || /[^a-zA-Z\s]/.test(nombre));

    let apellido;
    do {
        apellido = prompt("Ingrese el apellido del paciente:").trim();
        if (!apellido || /[^a-zA-Z\s]/.test(apellido)) {
            alert("Por favor, ingrese un apellido válido (solo letras y espacios).");
        }   
    } while (!apellido || /[^a-zA-Z\s]/.test(apellido));

    let edad;
    do {
        edad = prompt("Ingrese la edad del paciente:").trim();
        if (isNaN(edad) || edad <= 0 || edad.trim() === "") {
            alert("Por favor, ingrese una edad válida (número positivo).");
        }
    } while (isNaN(edad) || edad <= 0 || edad.trim() === ""); 

    let sintomas;
    do {
        sintomas = prompt("Ingrese los síntomas del paciente separados por comas:").trim();
        if (!sintomas || /[^a-zA-Z\s,]/.test(sintomas)) {
            alert("Por favor, ingrese síntomas válidos (solo letras, espacios y comas).");
        }
    } while (!sintomas || /[^a-zA-Z\s,]/.test(sintomas));

    let paciente = {
        nombre: nombre + " " + apellido,
        edad: parseInt(edad),
        sintomas: sintomas.split(",").map(sintoma => sintoma.trim())
    };

    pacientes.push(paciente);
    alert("Paciente registrado con éxito.");
}

let continuar = true;
while (continuar) {
    registrarPaciente();
    continuar = confirm("¿Desea registrar otro paciente?");
}

let mensaje = "Pacientes registrados:\n";
for (let i = 0; i < pacientes.length; i++) {
    let paciente = pacientes[i];
    mensaje += "Nombre: " + paciente.nombre + ", Edad: " + paciente.edad + ", Síntomas: " + paciente.sintomas.join(", ") + "\n";
}

alert(mensaje);
