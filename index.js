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

    eliminarPelicula(titulo) {
      this.peliculas = this.peliculas.filter((pelicula) => pelicula.titulo !== titulo);
    }

    obtenerTodasLasPeliculas() {
      return this.peliculas;
    }

    editarPelicula(indice, pelicula) {
      this.peliculas[indice] = pelicula;
    }
  }

  const coleccion = new ColeccionPeliculas();

  let indiceEdicion = null;

  function agregarPelicula() {
    const formValues = document.querySelectorAll('input')
    let allInputsFilled = true
      formValues.forEach((val) => {
        console.log(val.value)
        if(val.value.length === 0) {
            allInputsFilled = false
        }
    })


    if(!allInputsFilled) return

    const titulo = document.getElementById('titulo').value;
    const genero = document.getElementById('genero').value;
    const anio = document.getElementById('anio').value;
    const director = document.getElementById('director').value;

    const pelicula = new Pelicula(titulo, genero, anio, director);
    if (indiceEdicion !== null) {
      coleccion.editarPelicula(indiceEdicion, pelicula);
      indiceEdicion = null;
    } else {
      coleccion.agregarPelicula(pelicula);
    }

    mostrarPeliculas();
    limpiarCampos();
  }

  function eliminarPelicula(titulo) {
    coleccion.eliminarPelicula(titulo);
    mostrarPeliculas();
  }

  function editarPelicula(indice) {
    const pelicula = coleccion.obtenerTodasLasPeliculas()[indice];
    document.getElementById('titulo').value = pelicula.titulo;
    document.getElementById('genero').value = pelicula.genero;
    document.getElementById('anio').value = pelicula.anio;
    document.getElementById('director').value = pelicula.director;
    indiceEdicion = indice;
  }

  function mostrarPeliculas() {
    const listaPeliculas = document.getElementById('lista-peliculas');
    listaPeliculas.innerHTML = '';

    coleccion.obtenerTodasLasPeliculas().forEach((pelicula, index) => {
      const li = document.createElement('li');
      li.textContent = `${pelicula.titulo} - ${pelicula.genero} - ${pelicula.anio} - ${pelicula.director}`;

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Eliminar';
      deleteButton.classList.add('delete-button');
      deleteButton.onclick = () => eliminarPelicula(pelicula.titulo);
      li.appendChild(deleteButton);

      const editButton = document.createElement('button');
      editButton.onclick = () => editarPelicula(index);
      editButton.textContent = 'Editar';
      editButton.classList.add('edit-button');
      li.appendChild(editButton);

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