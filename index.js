class Pelicula {
    constructor(titulo, genero, anio, director) {
      this.titulo = titulo;
      this.genero = genero;
      this.anio = anio;
      this.director = director;
    }
  }

  class ColeccionPeliculas {
    constructor() {
      this.peliculas = [];
    }

    agregarPelicula(pelicula) {
      this.peliculas.push(pelicula);
    }

    obtenerTodasLasPeliculas() {
      return this.peliculas;
    }
  }

  const coleccion = new ColeccionPeliculas();

  function agregarPelicula() {
    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const anio = document.getElementById('anio').value;
    const director = document.getElementById('director').value;

    const pelicula = new Pelicula(titulo, genero, anio, director);
    coleccion.agregarPelicula(pelicula);

    mostrarPeliculas();
    limpiarCampos();
  }

  function mostrarPeliculas() {
    const listaPeliculas = document.getElementById('lista-peliculas');
    listaPeliculas.innerHTML = '';

    coleccion.obtenerTodasLasPeliculas().forEach((pelicula) => {
      const li = document.createElement('li');
      li.textContent = `${pelicula.titulo} - ${pelicula.genero} - ${pelicula.anio} - ${pelicula.director}`;
      listaPeliculas.appendChild(li);
    });
  }

  function limpiarCampos() {
    document.getElementById('titulo').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('anio').value = '';
    document.getElementById('director').value = '';
  }

  mostrarPeliculas();