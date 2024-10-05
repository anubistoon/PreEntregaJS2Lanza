let pacientes = [];

function registrarPaciente() {

    let nombre;
    do {
      nombre = prompt("Ingrese el nombre del paciente:");
      if (!nombre || /\d/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (solo letras).");
      }   
    } while (!nombre || /\d/.test(nombre));
    
    let apellido;
    do {
      apellido = prompt("Ingrese el apellido del paciente:");
      if (!apellido || /\d/.test(apellido)) {
        alert("Por favor, ingrese un apellido válido (solo letras).");
      }   
    } while (!apellido || /\d/.test(apellido));

    let edad;
    do {
        edad = prompt("Ingrese la edad del paciente:");
        if (isNaN(edad) || edad.trim() === "") {
        alert("Por favor, ingrese una edad válida (solo números).");
        }
    } while (isNaN(edad) || edad.trim() === ""); // Se repite hasta que se ingrese un número válido

    let sintomas;
    do {
        sintomas = prompt("Ingrese los síntomas del paciente:");
        if (!sintomas || /\d/.test(sintomas)) {
        alert("Por favor, ingrese un síntoma válido (solo letras).");
        }   
    } while (!sintomas || /\d/.test(sintomas));
  
    let paciente = {
        nombre: nombre + " " + apellido,
        edad: parseInt(edad),
        sintomas: sintomas.split(",")
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
