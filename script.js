document.addEventListener('DOMContentLoaded', function() {
  // Obtener los enlaces de navegación
  const btnInicio = document.getElementById('btn-inicio');
  const btnNoticias = document.getElementById('btn-noticias');
  const btnEstadisticas = document.getElementById('btn-estadisticas');
  const btnContacto = document.getElementById('btn-contacto');

  // Obtener las secciones
  const bienvenida = document.querySelector('.bienvenida');
  const proximosPartidos = document.querySelector('.proximos-partidos');
  const noticiasDestacadas = document.querySelector('.noticias-destacadas');
  const contacto = document.querySelector('#contacto');
  const estadisticas = document.querySelector('.estadisticas');
  const tablaPrimeraDivision = document.querySelector('#tabla-primera'); // Tabla de Primera División
  const tablaSub23 = document.querySelector('#tabla-sub23'); // Tabla Sub 23

  // Función para ocultar todas las secciones
  function ocultarSecciones() {
    bienvenida.classList.add('oculto');
    proximosPartidos.classList.add('oculto');
    noticiasDestacadas.classList.add('oculto');
    contacto.classList.add('oculto');
    estadisticas.classList.add('oculto');
    tablaPrimeraDivision.classList.add('oculto');
    tablaSub23.classList.add('oculto');
  }

  // Función para mostrar una sección específica
  function mostrarSeccion(seccion) {
    seccion.classList.remove('oculto');
  }

  // Manejadores de eventos de los botones de navegación
  btnInicio.addEventListener('click', function() {
    ocultarSecciones();
    mostrarSeccion(bienvenida);
    mostrarSeccion(proximosPartidos);
  });

  btnNoticias.addEventListener('click', function() {
    ocultarSecciones();
    mostrarSeccion(noticiasDestacadas);
    mostrarSeccion(tablaPrimeraDivision); // Muestra las tablas de posiciones solo en Noticias
    mostrarSeccion(tablaSub23); // Muestra las tablas de posiciones solo en Noticias
  });

  btnEstadisticas.addEventListener('click', function() {
    ocultarSecciones();
    mostrarSeccion(estadisticas);
  });

  btnContacto.addEventListener('click', function() {
    ocultarSecciones();
    mostrarSeccion(contacto);
  });

  // Cargar la página con la sección de Inicio visible
  mostrarSeccion(bienvenida);
  mostrarSeccion(proximosPartidos);
});
