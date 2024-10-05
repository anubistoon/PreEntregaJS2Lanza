let pacientes = [];

function registrarPaciente() {
  let nombre = prompt("Ingrese el nombre del paciente:");
  let edad = prompt("Ingrese la edad del paciente:");
  let sintomas = prompt("Ingrese los síntomas del paciente:");
  
  let paciente = {
    nombre: nombre,
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
