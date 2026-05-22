/* 
Esta aplicación detalla pasos a seguir en caso 
de que el servidor web esté fallando.

Simula un login y asigna tareas al usuario.
*/

// Función que devuelve un usuario
function obtenerUsuario() {

  return {
    name: 'Juan Perez',
    matricula: '725425-4'
  }
}

// Usando el HTML index.html
const usuario_HTML = document.getElementById('login')

// Verificación
if (usuario_HTML) {

  const user_data = obtenerUsuario()

  usuario_HTML.textContent ='Usuario: ' + user_data.name + ' - Matricula: ' + user_data.matricula + ' / (Cerrar Sesion)'
  usuario_HTML.setAttribute('class', 'title')
  usuario_HTML.style.backgroundColor = 'black'
  usuario_HTML.style.color = 'white'

} else {

  console.error("Elemento con id 'login' no encontrado")
}


// Botones modificar
const botonesModificar = document.querySelectorAll('.btnModificar')

// Recorremos todos los botones
botonesModificar.forEach((boton, index) => {

  boton.addEventListener('click', () => {

    console.log(`Modificar fila ${index + 1}`)
  })
})


// Botones eliminar
const botonesEliminar = document.querySelectorAll('.btnEliminar')

botonesEliminar.forEach((boton, index) => {

  boton.addEventListener('click', () => {

    console.log(`Eliminar fila ${index + 1}`)
  })
})

// Botones de verificar checkeo
// Botón verificado del paso 1
const botonVerificado1 = document.querySelector('.btnVerificado1')

// Elemento del paso 1
const paso1 = document.getElementById('paso1')

if (botonVerificado1 && paso1) {

  botonVerificado1.addEventListener(
    'click',
    () => {
      // Cambiar color
      paso1.style.backgroundColor = 'green'
      // Cambiar texto de la tabla
      paso1.textContent = 'Verificar energía eléctrica y UPS - VERIFICADO'
      // Mostrar mensaje
      console.log('Verificado paso 1')
    }
  )

} else {

  console.error('No se encontró el botón o el paso 1')
}

// Botón verificado del paso 2
const botonVerificado2 = document.querySelector('.btnVerificado2')

// Elemento del paso 2
const paso2 = document.getElementById('paso2')

if (botonVerificado2 && paso2) {

  botonVerificado2.addEventListener(
    'click',
    () => {
      // Cambiar color
      paso2.style.backgroundColor = 'green'
      // Cambiar texto de la tabla
      paso2.textContent = 'Verificar conectividad de red - VERIFICADO'
      // Mostrar mensaje
      console.log('Verificado paso 2')
    }
  )

} else {

  console.error('No se encontró el botón o el paso 2')
}


// Botón verificado del paso 3
const botonVerificado3 = document.querySelector('.btnVerificado3')

// Elemento del paso 3
const paso3 = document.getElementById('paso3')

if (botonVerificado3 && paso3) {

  botonVerificado3.addEventListener(
    'click',
    () => {
      // Cambiar color
      paso3.style.backgroundColor = 'green'
      // Cambiar texto de la tabla
      paso3.textContent = 'Acceso local o remoto al equipo - VERIFICADO'
      // Mostrar mensaje
      console.log('Verificado paso 3')
    }
  )

} else {

  console.error('No se encontró el botón o el paso 3')
}

// Botón verificado del paso 4
const botonVerificado4 = document.querySelector('.btnVerificado4')

// Elemento del paso 4
const paso4 = document.getElementById('paso4')

if (botonVerificado4 && paso4) {

  botonVerificado4.addEventListener(
    'click',
    () => {
      // Cambiar color
      paso4.style.backgroundColor = 'green'
      // Cambiar texto de la tabla
      paso4.textContent ='Restaurar configuración desde backup si corresponde - VERIFICADO'
      // Mostrar mensaje
      console.log('Verificado paso 4')
    }
  )

} else {

  console.error('No se encontró el botón o el paso 4')
}


// Botón verificado del paso 5
const botonVerificado5 = document.querySelector('.btnVerificado5')

// Elemento del paso 5
const paso5 = document.getElementById('paso5')

if (botonVerificado5 && paso5) {

  botonVerificado5.addEventListener(
    'click',
    () => {
      // Cambiar color
      paso5.style.backgroundColor = 'green'
      // Cambiar texto de la tabla
      paso5.textContent ='Evaluar reemplazo de hardware si es necesario - VERIFICADO'
      // Mostrar mensaje
      console.log('Verificado paso 5')
    }
  )

} else {

  console.error('No se encontró el botón o el paso 5')
}