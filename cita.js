window.addEventListener("load", cargarPagina);

	var cajaSelector = document.getElementById("cajaSelector");
	var selector = document.getElementById("selector");
	var contenedor = document.createElement("div");

	function cargarPagina(){
		selector.addEventListener("change", seleccionarOpcion);

	function seleccionarOpcion (){
		var selectorValor = selector.value;
		switch(selectorValor){
			case "texto":
				texto();
				break;
			case "cita":
				cita();
				break;
			case "meme":
				meme();
				break;
			case "notas":
				nota();
				break;
		}
	}	
	function texto(){
		var inputTexto =  document.createElement("input");
		var textareaTexto = document.createElement("textarea");
		var botonEliminar = document.createElement("button");
		var botonPublicar = document.createElement("button");

		contenedor.setAttribute("id","contenedor");
		inputTexto.setAttribute("placeholder","Escribe titulo");
		textareaTexto.setAttribute("placeholder","Escribe Texto");

		botonEliminar.textContent = "Eliminar";
		botonPublicar.textContent = "Publicar";

		contenedor.appendChild(inputTexto);
		contenedor.appendChild(textareaTexto);
		contenedor.appendChild(botonEliminar);
		contenedor.appendChild(botonPublicar);
		cajaSelector.appendChild(contenedor);

		botonPublicar.addEventListener("click",publicar);
		botonEliminar.addEventListener("click",eliminar);
	}
	function cita(){
		var textareaCita = document.createElement("textarea");
		var inputCita = document.createElement("input");
		var botonEliminar = document.createElement("button");
		var botonPublicar = document.createElement("button");

		contenedor.setAttribute("id","contenedor");
		inputCita.setAttribute("placeholder","Autor ...");
		textareaCita.setAttribute("placeholder","Escribe Cita");

		botonEliminar.textContent = "Eliminar";
		botonPublicar.textContent = "Publicar";

		contenedor.appendChild(textareaCita);
		contenedor.appendChild(inputCita);
		contenedor.appendChild(botonEliminar);
		contenedor.appendChild(botonPublicar);
		cajaSelector.appendChild(contenedor);

		botonPublicar.addEventListener("click",publicar);
		botonEliminar.addEventListener("click",eliminar);
	}
	function meme(){
		var inputMeme = document.createElement("input");
		var botonEliminar = document.createElement("button");
		var botonPublicar = document.createElement("button");

		contenedor.setAttribute("id","contenedor");
		inputMeme.setAttribute("placeholder","Autor ...");

		botonEliminar.textContent = "Eliminar";
		botonPublicar.textContent = "Publicar";

		contenedor.appendChild(inputMeme);
		contenedor.appendChild(botonEliminar);
		contenedor.appendChild(botonPublicar);
		cajaSelector.appendChild(contenedor);

		botonPublicar.addEventListener("click",publicar);
		botonEliminar.addEventListener("click",eliminar);
	}
	function nota(){
		var textareaNotas = document.createElement("textarea");
		var inputNotas = document.createElement("input");
		var botonEliminar = document.createElement("button");
		var botonPublicar = document.createElement("button");
		var botonCambiarColor = document.createElement("button");

		contenedor.setAttribute("id","contenedor");
		inputNotas.setAttribute("placeholder","Titulo ...");
		textareaNotas.setAttribute("placeholder","Escribe Notas");

		botonEliminar.textContent = "Eliminar";
		botonPublicar.textContent = "Publicar";
		botonCambiarColor.textContent = "Color";

		contenedor.appendChild(textareaNotas);
		contenedor.appendChild(inputNotas);
		contenedor.appendChild(botonEliminar);
		contenedor.appendChild(botonCambiarColor);
		contenedor.appendChild(botonPublicar);
		cajaSelector.appendChild(contenedor);

		botonPublicar.addEventListener("click",publicar);
		botonEliminar.addEventListener("click",eliminar);
	}
	function eliminar(){
		this.parentElement.remove();
	}
	function publicar(){
		var h2 = document.createElement("h2");
		var p = document.createElement("p");
		var divPub = document.createElement("div");
		var divHora = document.createElement("div");
		var horaPub = fechaPub();
		var botonEliminar= document.createElement("button");

		var titulo = this.parenElement.children[0].value;
		var texto = this.parenElement.children[1].value;

		h2.innerText = titulo;
		p.innerText = texto;
		divHora.innerText = horaPub; 
		botonEliminar.textContent"eliminar";

		cajaSelector.appendChild(contenedorPublicacion);
		contenedorPublicacion.appendChild(divPub);
		divPub.appendChild(h2);
		divPub.appendChild(p);
		divPub.appendChild(divHora);
		divPub.appendChild(botonEliminar);

		botonEliminar.addEventListener("click", eliminar);
		titulo = "";
		texto = "";

	}

	function eliminar(){
		this.parenElement.remove();
	}

	function fechaPub (){
		var fecha = new Date();
		var hora = fecha.getHours();
		var minuto = fecha.getMinutes();
		var segundo = fecha.getSecons();
		return hora + ":" + minuto + ":" + segundo;
	}

	
};