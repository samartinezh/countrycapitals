//Elementos del DOM utilizados.
let bandera = document.getElementById('bandera');
let nombrePais = document.getElementById('pais');
let nombreCapital = document.getElementById('capital');
let boton = document.getElementById('btn-buscar-pais');

//Función flecha que selecciona aleatoriamente un número entero.
buscarPaisAleatorio = (min, max) => {
	return Math.floor(Math.random() * (max - min) + min);
};

//Función flecha que muestra ese número aleatoriamente y pinta en pantalla la bandera del país y su capital, dicha información es sacada del arreglo paises del archivo paises.js.
mostrarPais = () => {
	let paisAleatorio = buscarPaisAleatorio(0, paises.length);
	bandera.setAttribute('src', paises[paisAleatorio].src);
	nombrePais.innerText = paises[paisAleatorio].pais;
	nombreCapital.innerText = paises[paisAleatorio].capital;
};

mostrarPais();

//Evento que llama a la función mostrarPais y pinta la información en pantalla al dar click en el botón buscar país.
boton.addEventListener('click', mostrarPais);
