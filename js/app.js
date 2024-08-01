class Persona {
  constructor(nombre, edad, DNI, sexo, peso, altura, fnac) {
    this.nombre = nombre;
    this.edad = edad;
    this.DNI = DNI;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.fnac = fnac;
  }

  mostrarGeneracion() {
    switch (this.fnac != 0) {
      case parseInt(this.fnac) >= 1930 && parseInt(this.fnac) < 1948:
        alert(
          `la persona: ${this.nombre} pertenece a la generacion: SILENT GENERATION`
        );
        break;
      case parseInt(this.fnac) >= 1949 && parseInt(this.fnac) < 1968:
        alert(
          `la persona: ${this.nombre} pertenece a la generacion: BABY BOOM`
        );
        break;
      case parseInt(this.fnac) >= 1969 && parseInt(this.fnac) < 1980:
        alert(
          `la persona: ${this.nombre} pertenece a la generacion: GENERACION X`
        );
        break;
      case parseInt(this.fnac) >= 1981 && parseInt(this.fnac) < 1993:
        alert(
          `la persona: ${this.nombre} pertenece a la generacion: GENERACION Y`
        );
        break;
      case parseInt(this.fnac) >= 1994 && parseInt(this.fnac) < 2010:
        alert(
          `la persona: ${this.nombre} pertenece a la generacion: GENERACION Z`
        );
        break;
    }
  }
  esMayorDeEdad() {
    if (parseInt(this.edad) > 18) {
      alert(`La persona ${this.nombre} es mayor de edad`);
    } else {
      alert(`La persona ${this.nombre} es menor de edad`);
    }
  }

  mostrarDatos() {
    alert(
      `los datos de la persona son nombre: ${this.nombre}, edad: ${this.edad}, dni: ${this.DNI}, sexo: ${this.sexo}, peso: ${this.peso} KG, altura: ${this.altura} CM, fecha de nacimiento: ${this.fnac}`
    );
  }
}

//Obtener datos del form
const datosPersona = (e) => {
  e.preventDefault();
  const nombre = document.querySelector("#nombre").value;
  const edad = document.querySelector("#edad").value;
  const dni = document.querySelector("#dni").value;
  const sexo = document.querySelector("#sexo").value;
  const peso = document.querySelector("#peso").value;
  const altura = document.querySelector("#altura").value;
  const fecha = document.querySelector("#fecha").value;
  persona = new Persona(nombre, edad, dni, sexo, peso, altura, fecha);
  persona.mostrarDatos();
};

const mayorEdad = (e) => {
  e.preventDefault();

  persona.esMayorDeEdad();
};
const generacion = (e) => {
  e.preventDefault();
  persona.mostrarGeneracion();
};

//Obtener boton guardar
const btnGuardar = document.querySelector("#guardar");
btnGuardar.addEventListener("click", datosPersona);
const btnMayorDeEdad = document.querySelector("#mayorDeEdad");
btnMayorDeEdad.addEventListener("click", mayorEdad);
const btnMostrarGeneracion = document.querySelector("#mostrarGeneracion");
btnMostrarGeneracion.addEventListener("click", generacion);
