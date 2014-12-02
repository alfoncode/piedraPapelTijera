//Genera un número aleatorio entre un rango de enteros

function genOpcion(min,max){
	var numero = Math.floor(Math.random()*(max-min+1) + min);
	return numero
}

var piedra = 0;
var papel = 1;
var tijera = 2;

var opciones = ["Piedra", "Papel", "Tijera"];
var opcionUsuario;
var opcionMaquina = genOpcion(0,2);

opcionUsuario = prompt("¿Qué liges?\nPiedra: 0\nPapel: 1\nTijera: 2",0);

alert("Elegiste: " + opciones[opcionUsuario]);
alert("La máquina eligió: " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
	if(opcionMaquina == piedra)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Gana la máquina!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Has ganado!");
	}
}
else if(opcionUsuario == papel)
{
	if(opcionMaquina == piedra)
	{
		alert("Has ganado!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Empate!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Gana la máquina!");
	}
}
else if(opcionUsuario == tijera)
{
	if(opcionMaquina == piedra)
	{
		alert("Gana la máquina!");
	}
	else if(opcionMaquina == papel)
	{
		alert("Has ganado!");
	}
	else if(opcionMaquina == tijera)
	{
		alert("Empate!");
	}
}
else
{
	alert("Elegiste un valor no válido!");
}