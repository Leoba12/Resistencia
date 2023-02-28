process.env.NTBA_FIX_319 = 1;
// Importamos la librería node-telegram-bot-api 
const TelegramBot = require('node-telegram-bot-api');

// Creamos una constante que guarda el Token de nuestro Bot de Telegram que previamente // hemos creado desde el bot @BotFather
const token = '1337918545:AAEGFelSBDTmyBqFmeP3hTwP20tMsJksPas';

const bot = new TelegramBot(token, {polling: true});

var rp=0;
var ep=0;
var mr=0;
var viaje=1;
var jug=0, j=1;
var lesp=0, esp=0;
var lres=0, res=0;
var dado=0;
var e1=0, e2=0, e3=0, e4=0;
var v1=0, v2=0, v3=0, v4=0, v5=0;
var nj1=0, nj2=0, nj3=0, nj4=0, nj5=0, nj6=0, nj7=0, nj8=0, nj9=0, nj10=0;
var t=1;
var turno=0;
var lp=0;

bot.onText(/^\Hola|^\/hola/, (msg) => {
	 bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name)
	 bot.sendMessage(msg.chat.id, "Da click en /Inicio si deseas comenzar una partida.");
	 bot.sendMessage(msg.chat.id, "Para ver las instrucciones da click en /help.");	 
 })

 bot.onText(/^\!rol/, (msg) => {
	bot.sendMessage(msg.chat.id, "Hola " + msg.from.first_name);
	bot.sendMessage(msg.chat.id, "Para unirte a esta partida da click en /joingame y se te asignara un rol.");
})

bot.onText(/^\/Inicio/, (msg) => {
     bot.sendMessage(msg.chat.id, "Selecciona el numero de jugadores diciendo !x (Ej. !2).  \nDebes seleccionar entre 5 y 10 jugadores.");
 })

bot.onText(/^\/spy/, (msg) => {

	if(jug<=6)
	{
if(msg.from.first_name==e1)
	{
		bot.sendMessage(msg.chat.id, "Tu compañero es \n"+e2);
	}
if(msg.from.first_name==e2)
{
		bot.sendMessage(msg.chat.id, "Tu compañero es \n"+e1);
}
}
if(jug>6 && jug<10)
{
	if(msg.from.first_name==e1)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e3+" y "+e2);
	}
	if(msg.from.first_name==e2)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e1+" y "+e3);
	}
	if(msg.from.first_name==e3)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e1+" y "+e2);
	}
}
if(jug==10)
{	
	if(msg.from.first_name==e1)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e2+", "+e3+" y "+e4);
	}
	if(msg.from.first_name==e2)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e1+", "+e4+" y "+e3);
	}
	if(msg.from.first_name==e3)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e1+", "+e2+" y "+e4);
	}
	if(msg.from.first_name==e4)
	{
		bot.sendMessage(msg.chat.id, "Tus compañeros son \n"+e1+", "+e2+" y "+e3);
	}
}
if(msg.from.first_name!=e1 && msg.from.first_name!=e2 && msg.from.first_name!=e3 && msg.from.first_name!=e4 )
	bot.sendMessage(msg.chat.id, "Eres resistencia.\nTu no puedes ver quienes son los espias.");
})
bot.onText(/^\/joingame/, (msg) => {
	if(j<=jug)
	{
	if(j==1)
	nj1=msg.from.first_name;
	turno=nj1;
	if(j==2)
	nj2=msg.from.first_name;
	if(j==3)
	nj3=msg.from.first_name;
	if(j==4)
	nj4=msg.from.first_name;
	if(j==5)
	nj5=msg.from.first_name;
	if(j==6)
	nj6=msg.from.first_name;
	if(j==7)
	nj7=msg.from.first_name;
	if(j==8)
	nj8=msg.from.first_name;
	if(j==9)
	nj9=msg.from.first_name;
	if(j==10)
	nj10=msg.from.first_name;
	j=j+1;
	dado = Math.round(Math.random()*6);
	if(dado>3)
	{  
	  if(esp<lesp)
	  {
	  esp=esp+1;
	   if(esp==1)
		{
		e1=msg.from.first_name;
		}
		if(esp==2)
		{
		e2=msg.from.first_name;
		}
		if(esp==3)
		{
		e3=msg.from.first_name;
		}
		if(esp==4)
		{
		e4=msg.from.first_name;
		}
		if(lesp==esp)
		{
		if(jug<=6)
		bot.sendMessage(msg.chat.id, "Eres espia.\nPuedes ver quien es tu compañero dando click en /spy.");
		if(jug>6 && jug<10)
		bot.sendMessage(msg.chat.id, "Eres espia.\nPuedes ver quienes son tus compañeros dando click en /spy.");
		if(jug==10)
		bot.sendMessage(msg.chat.id, "Eres espia.\nPuedes ver quienes son tus compañeros dando click en /spy.");
		}
		else
		{
		if(jug<=6)
		bot.sendMessage(msg.chat.id, "Eres espia.\nCuando inicie el juego podrás ver quien es tu compañero dando click en /spy.");
		if(jug>6 && jug<10)
		bot.sendMessage(msg.chat.id, "Eres espia.\nCuando inicie el juego podrás ver quienes son tus compañeros dando click en /spy.");
		if(jug==10)
		bot.sendMessage(msg.chat.id, "Eres espia.\nCuando inicie el juego podrás ver quienes son tus compañeros dando click en /spy.");
		}
	  }
	  else 
		{
	  if(res<=lres)
			{
	bot.sendMessage(msg.chat.id, "Eres resistencia.");
	res=res+1;
			}
		}
}
	  else
	{ 
	if(dado<4)
	{ if(res<lres)
	{
	bot.sendMessage(msg.chat.id, "Eres resistencia.");
	res=res+1;
	}
	else
	{
		if(esp<lesp)
		{
		esp=esp+1;
		 if(esp==1)
		  {
		  e1=msg.from.first_name;
		  }
		  if(esp==2)
		  {
		  e2=msg.from.first_name;
		  }
		  if(esp==3)
		  {
		  e3=msg.from.first_name;
		  }
		  if(esp==4)
		  {
		  e4=msg.from.first_name;
		  }
		  if(lesp==esp)
		  {
		  if(jug<=6)
		  bot.sendMessage(msg.chat.id, "Eres espia.\nPuedes ver quien es tu compañero dando click en /spy.");
		  if(jug>6 && jug<10)
		  bot.sendMessage(msg.chat.id, "Eres espia.\nPuedes ver quienes son tus compañeros dando click en /spy.");
		  if(jug==10)
		  bot.sendMessage(msg.chat.id, "Eres espia.\nPuedes ver quienes son tus compañeros dando click en /spy.");
		  }
		  else
		  {
		  if(jug<=6)
		  bot.sendMessage(msg.chat.id, "Eres espia.\nCuando inicie el juego podrás ver quien es tu compañero dando click en /spy.");
		  if(jug>6 && jug<10)
		  bot.sendMessage(msg.chat.id, "Eres espia.\nCuando inicie el juego podrás ver quienes son tus compañeros dando click en /spy.");
		  if(jug==10)
		  bot.sendMessage(msg.chat.id, "Eres espia.\nCuando inicie el juego podrás ver quienes son tus compañeros dando click en /spy.");
		  }
	}
}
}
}
}
	else
	bot.sendMessage(msg.chat.id, "Ya no hay lugar para mas jugadores.");
	 })

bot.onText(/^\/reset/, (msg) => {
	rp=0;
	ep=0;
	mr=0;
	viaje=1;
	jug=0, j=1;
	lesp=0, esp=0;
	lres=0, res=0;
	dado=0;
	e1=0, e2=0, e3=0, e4=0;
	v1=0, v2=0, v3=0, v4=0, v5=0;
	nj1=0, nj2=0, nj3=0, nj4=0, nj5=0, nj6=0, nj7=0, nj8=0, nj9=0, nj10=0;
	t=1;
	turno=0;
	lp=0;
	 bot.sendMessage(msg.chat.id, "Juego Reiniciado.\nDa click en /Inicio para comenzar otra partida.");
 })

bot.onText(/^\/Jugar/, (msg) => {
if(jug==(j-1))
{
	 bot.sendMessage(msg.chat.id, "Partida de "+jug+" Jugadores. Hay "+(j-1)+" roles asignados. "+res+" Resistencias y "+esp+" Espias.");
	 bot.sendMessage(msg.chat.id, "Empieza "+nj1+".");
	 bot.sendMessage(msg.chat.id, nj1+" da click en /votos.");
}
else
bot.sendMessage(msg.chat.id, "Partida de "+jug+" Jugadores. Faltan "+(jug-(j-1))+" jugadores.\nVuelve a intentarlo cuando esten completos /Jugar");
 })

bot.onText(/^\/help/, (msg) => {
     bot.sendMessage(msg.chat.id, "La Resistencia es un juego de identidades secretas, deducción y engaño con gran interacción.\nLos jugadores son miembros de la Resistencia, una organización encubierta que lucha contra un gobierno maligno. Pero en la organización se han infiltrado espías para frustrar sus planes. ¿Será capaz la Resistencia de descubrir a tiempo a los espias?\n\nEl desarrollo del juego es muy sencillo.\n\nEl equipo formado por La Resistencia tiene que llevar a cabo tres misiones con éxito antes de que lo consiga el equipo de infiltrados. El factor clave es el poder de convicción y la deducción. Es muy importante saber expresarse bien para no dar pie a qué te puedan tachar de infiltrado.\n\nLos roles de Resistencia y Espia se les asignara al inicio del juego de forma secreta por mensaje privado. Los espias podrán saber quienes son sus compañeros, pero la resistencia no(por obvias razones).\n\nSe hacen una serie de misiones en las que un líder, que va cambiando cada ronda(por turnos automaticos que el bot asigna), tiene que escoger un equipo para llevar a cabo la misión que tendrá éxito o no dependiendo de lo que voten sus miembros. Los pertenecientes a La Resistencia están obligados a votar siempre con éxito, pero los espias pueden votar éxito o no en función de lo que crean más oportuno en cada momento para poder ganarse la confianza del resto de jugadores.\n\nEl primer equipo en ganar tres misiones gana la partida.\n\nEl Se debe acompañar el uso del bot con una videollamada grupal ya que la conversación entre jugadores y la defensa frente a las acusaciones son los factores más importantes en La Resistencia. Cualquiera puede estar mintiendo.\n\n\n\nComandos y funciones.\n\nPara comenzar hay que decir Hola.\nDespues el bot te indicara los siguientes pasos a seguir para la seleccion de jugadores(de 5 a 10 jugadores) y la asignación de roles.\n\nUna vez iniciado el juego el bot indicara los turnos.\nEl jugador en turno debe inicar la mision o cancelarla segun la mayoria de votos.\nSi la mision no consigue la mayoria de votos debera ser cancelada.\nEl limite de misiones canceladas es 5.\nSi se alcanza este limite los ganadores seran los espias.\n\nEl jugador en turno debe seleccionar si la mision fue un éxito o fracasó segun el resultado de la misión.\n\nSi por alguna razón se comete un error puedes remover o cambiar el ultimo punto con el comando /undo.\n\nPara ver la puntuación en cualquier momento usa el comando /score\n\nPuedes reiniciar el juego en cualquier momento con el comando /reset.");
 })

bot.onText(/^\/cancelarm/, (msg) => { 
	if(msg.from.first_name==turno)
{
	mr=mr+1;
	t=t+1;
if(mr<=4)
{
	 bot.sendMessage(msg.chat.id, "Misiones rechazadas: "+mr);
	 if(t==1)
	 turno=nj1;
	 if(t==2)
	 turno=nj2;
	 if(t==3)
	 turno=nj3;	
	 if(t==4)
	 turno=nj4;
	 if(t==5)
	 turno=nj5;
	 if(t==6)
	 turno=nj6;
	 if(t==7)
	 turno=nj7;
	 if(t==8)
	 turno=nj8;
	 if(t==9)
	 turno=nj9;
	 if(t==10)
	 turno=nj10;
	 bot.sendMessage(msg.chat.id,"Es el turno de "+turno+".\nDa click en /votos para continuar.");
	 if(t>jug)
	 t=1;

}
else
{
bot.sendMessage(msg.chat.id, "Limite de Misiones Canceladas alcanzado. \n Ganan los espias.\n\nPuntuación Final: " + "\n Resistencia: " + rp + "\n Espias: " + ep);
rp=0;
ep=0;
mr=0;
viaje=1;
jug=0, j=1;
lesp=0, esp=0;
lres=0, res=0;
dado=0;
e1=0, e2=0, e3=0, e4=0;
v1=0, v2=0, v3=0, v4=0, v5=0;
nj1=0, nj2=0, nj3=0, nj4=0, nj5=0, nj6=0, nj7=0, nj8=0, nj9=0, nj10=0;
t=1;
turno=0;
lp=0;
}
}
else
{
	bot.sendMessage(msg.chat.id, "Es el turno de "+turno+".\nSolo el puede cancelar la mision.");
}
 })

bot.onText(/^\/mision|^\/Mision/, (msg) => {
if(msg.from.first_name==turno)
{
	if(viaje==1)
	bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nDebe haber "+v1+" jugadores en esta misión.");
	if(viaje==2)
	bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nDebe haber "+v2+" jugadores en esta misión.");
	if(viaje==3)
	bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nDebe haber "+v3+" jugadores en esta misión.");
	if(viaje==4)
	{
		if(jug>=7)
	bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nDebe haber "+v4+" jugadores en esta misión.\nDebe haber minimo 2 espias para fracasar la misión.");
		else
	bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nDebe haber "+v4+" jugadores en esta misión.");
	}
	if(viaje==5)
	bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nDebe haber "+v5+" jugadores en esta misión.");
    var	poll_options = ["Éxitosa","Fracasada"]; // Mínimo 2 y máximo 10 opciones 
	bot.sendPoll(msg.chat.id, "Éxito de la misión",poll_options);
	bot.sendMessage(msg.chat.id,"Da click en /cerrarvotos para terminar esta misión.");
}
else
bot.sendMessage(msg.chat.id, turno+" es quien debe iniciar esta misión.\n/cerrarvotos");

	})
	
	bot.onText(/^\/votos|^\/Votos/, (msg) => {
		if(msg.from.first_name==turno)
		{
			if(viaje==1)
			bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nEn esta misión deben ir "+v1+" jugadores.");
			if(viaje==2)
			bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nEn este misión deben ir "+v2+" jugadores.");
			if(viaje==3)
			bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nEn este misión deben ir "+v3+" jugadores.");
			if(viaje==4)
			{
				if(jug>=7)
			bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nEn este misión deben ir "+v4+" jugadores.\nDebe haber minimo 2 espias para fracasar la misión.");
			else
			bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nEn este misión deben ir "+v4+" jugadores.");
			}
			if(viaje==5)
			bot.sendMessage(msg.chat.id,"Misión " + viaje+"\nEn este misión deben ir "+v5+" jugadores.");
			var	poll_options = ["Si","No"]; // Mínimo 2 y máximo 10 opciones
			const opts = {
				'is_anonymous': false
			  };
			bot.sendPoll(msg.chat.id, "Llevar a cabo la misión",poll_options, opts);
			bot.sendMessage(msg.chat.id,"Para iniciar la mision da click en /mision\nClick en /cancelarm para cancelar la mision.");
		}
		else
		bot.sendMessage(msg.chat.id, "Es turno de "+turno+".\nEl debe iniciar esta votación.\n/votos");
			})

bot.onText(/^\!5/, (msg) => {
jug=5;
bot.sendMessage(msg.chat.id, "Recibido "+jug+" jugadores.");
bot.sendMessage(msg.chat.id, "Click en /Confirmar");
})

bot.onText(/^\!6/, (msg) => {
jug=6;
bot.sendMessage(msg.chat.id, "Recibido "+jug+" jugadores.");
bot.sendMessage(msg.chat.id, "Click en /Confirmar");
})

bot.onText(/^\!7/, (msg) => {
jug=7;
bot.sendMessage(msg.chat.id, "Recibido "+jug+" jugadores.");
bot.sendMessage(msg.chat.id, "Click en /Confirmar");
})

bot.onText(/^\!8/, (msg) => {
jug=8;
bot.sendMessage(msg.chat.id, "Recibido "+jug+" jugadores.");
bot.sendMessage(msg.chat.id, "Click en /Confirmar");
})

bot.onText(/^\!9/, (msg) => {
jug=9;
bot.sendMessage(msg.chat.id, "Recibido "+jug+" jugadores.");
bot.sendMessage(msg.chat.id, "Click en /Confirmar");
})

bot.onText(/^\!10/, (msg) => {
jug=10;
bot.sendMessage(msg.chat.id, "Recibido "+jug+" jugadores.");
bot.sendMessage(msg.chat.id, "Click en /Confirmar");
})

bot.onText(/^\/Confirmar/, (msg) => {
if(jug==5)
{
lesp=2;
lres=3;
v1=2, v2=3, v3=2; v4=3, v5=3;
bot.sendMessage(msg.chat.id, "Habra "+lres+" Resistencias y "+lesp+" Espias.");
}
if(jug==6)
{
lesp=2;
lres=4;
v1=2, v2=3, v3=4; v4=3, v5=4;
bot.sendMessage(msg.chat.id, "Habra "+lres+" Resistencias y "+lesp+" Espias.");
}
if(jug==7)
{
lesp=3;
lres=4;
v1=2, v2=3, v3=3; v4=4, v5=4;
bot.sendMessage(msg.chat.id, "Habra "+lres+" Resistencias y "+lesp+" Espias.");
}
if(jug==8)
{
lesp=3;
lres=5;
v1=3, v2=4, v3=4; v4=5, v5=5;
bot.sendMessage(msg.chat.id, "Habra "+lres+" Resistencias y "+lesp+" Espias.");
}
if(jug==9)
{
lesp=3;
lres=6;
v1=3, v2=4, v3=4; v4=5, v5=5;
bot.sendMessage(msg.chat.id, "Habra "+lres+" Resistencias y "+lesp+" Espias.");
}
if(jug==10)
{
lesp=4;
lres=6;
v1=3, v2=4, v3=4; v4=5, v5=5;
bot.sendMessage(msg.chat.id, "Habra "+lres+" Resistencias y "+lesp+" Espias.");
}
bot.sendMessage(msg.chat.id, "Por MENSAJE PRIVADO enviame un mensaje con la palabra '!rol'. Una vez que todos tengan su rol da click en /Jugar");

  })
  bot.onText(/^\/cerrarvotos|^\/CERRAR VOTOS/, (msg) => {
	if(msg.from.first_name==turno)
	{
	bot.sendMessage(msg.chat.id,"Votación cerrada.");
	bot.sendMessage(msg.chat.id,"Mision exitosa /success - Mision fracasada /fail");
	}
	else
	bot.sendMessage(msg.chat.id,"Solo "+turno+" puede cerrar la votación.");
})

bot.onText(/^\/success|^\/SUCCESSMISION/, (msg) => {
	if(msg.from.first_name==turno)
	{
	rp=rp+1;
	viaje=viaje+1;
	lp=1;
	t=t+1;
if(t>jug)
t=1;
if(t==1)
turno=nj1; 
if(t==2)
 turno=nj2;
 if(t==3)
 turno=nj3;	
 if(t==4)
 turno=nj4;
 if(t==5)
 turno=nj5;
 if(t==6)
 turno=nj6;
 if(t==7)
 turno=nj7;
 if(t==8)
 turno=nj8;
 if(t==9)
 turno=nj9;
 if(t==10)
 turno=nj10;
 if(rp<=3 && ep<=3)
	bot.sendMessage(msg.chat.id,"Mision exitosa.\nPunto para Resistencia.\n\nPuntuación:\nResistencia: " + rp + "\n Espias: " + ep+"\nSi cometió un error de click en /undo para deshacer.\n\nAhora es turno de "+turno+".\nDa click en /votos para continuar.");
 if(rp>=3)
{
bot.sendMessage(msg.chat.id,"Mision exitosa.\n\nFin del Juego\nGana la Resistencia\n\nPara reiniciar da click en /reset");
}
}
else
bot.sendMessage(msg.chat.id,"Solo "+turno+" puede determinar el éxito de esta mision.");
})

bot.onText(/^\/fail|^\/FAILMISION/, (msg) => {
	if(msg.from.first_name==turno)
	{
	ep=ep+1;
	lp=2;
	viaje=viaje+1;
	t=t+1;
if(t>jug)
t=1;
if(t==1)
turno=nj1; 
if(t==2)
 turno=nj2;
 if(t==3)
 turno=nj3;	
 if(t==4)
 turno=nj4;
 if(t==5)
 turno=nj5;
 if(t==6)
 turno=nj6;
 if(t==7)
 turno=nj7;
 if(t==8)
 turno=nj8;
 if(t==9)
 turno=nj9;
 if(t==10)
 turno=nj10;
 if(rp<=3 && ep<=3)
	bot.sendMessage(msg.chat.id,"Mision fracasada.\nPunto para Espias.\n\nPuntuación:\nResistencia: " + rp + "\n Espias: " + ep+"\nSi cometió un error de click en /undo para deshacer.\n\nEs el turno de "+turno+".\nDa click en /votos para continuar.");
if(rp>=3)
{
bot.sendMessage(msg.chat.id,"Mision fracasada.\n\nFin del Juego\nGana la Resistencia\n\nPara reiniciar da click en /reset");
}
}
else
bot.sendMessage(msg.chat.id,"Solo "+turno+" puede determinar el éxito de esta mision.");
})

bot.onText(/^\!terminar|^\/DETENER ENCUESTA/, (msg) => {
	var replyId_messageId = msg.reply_to_message.message_id;
	bot.stopPoll(msg.chat.id,poll_options);
 })

	
bot.onText(/^\/rpremove|^\/Remove Resistencia/, (msg) => {
		rp=rp-1;
		viaje=viaje-1;
		bot.sendMessage(msg.chat.id,"Punto removido.\n\nPuntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep+"\n\nClick en /mision para reiniciar la misión.");
	})

bot.onText(/^\/epremove|^\/Remove Espias/, (msg) => {
				ep=ep-1;
				viaje=viaje-1;
		bot.sendMessage(msg.chat.id,"Punto removido.\n\nPuntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep+"\n\nClick en /mision para reiniciar la misión.");	
	})

	bot.onText(/^\/Removepoint|^\/Remove Point/, (msg) => {
		if(msg.from.first_name==turno)
		{
			if(lp==1)
			{
				rp=rp-1;
				viaje=viaje-1;
				if(viaje==0)
				viaje=1;
				lp=0;
				bot.sendMessage(msg.chat.id,"Punto removido.\n\nPuntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep+"\n\nClick en /mision para reiniciar la misión.");
			}
			if(lp==2)
			{
				ep=ep-1;
				viaje=viaje-1;
				if(viaje==0)
				viaje=1;
				lp=0;
				bot.sendMessage(msg.chat.id,"Punto removido.\n\nPuntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep+"\n\nClick en /mision para reiniciar la misión.");
			}
		}
		else
		bot.sendMessage(msg.chat.id,"Solo "+turno+" puede cambiar el punto que marcó.");
		})

	bot.onText(/^\/Changepoint|^\/Change Point/, (msg) => {
		if(msg.from.first_name==turno)
		{
			if(lp==1)
			{	rp=rp-1;
				ep=ep+1;
				bot.sendMessage(msg.chat.id,"Punto cambiado correctamente.\n\nPuntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep);
		    if(rp>=3)
			{
			bot.sendMessage(msg.chat.id,"Fin del Juego\nGana la Resistencia\n\nPara reiniciar da click en /reset");
			}
			}
			if(lp==2)
			{
				ep=ep-1;
				rp=rp+1;
				bot.sendMessage(msg.chat.id,"Punto cambiado correctamente.\n\nPuntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep);
			 if(ep>=3)
			{
			bot.sendMessage(msg.chat.id,"Fin del Juego\nGanan los espias.\n\nPara reiniciar da click en /reset");
			}
			}
	if(rp<=3 && ep<=3)
	{
	if(t==1)
	turno=nj1; 
	if(t==2)
	 turno=nj2;
	 if(t==3)
	 turno=nj3;	
	 if(t==4)
	 turno=nj4;
	 if(t==5)
	 turno=nj5;
	 if(t==6)
	 turno=nj6;
	 if(t==7)
	 turno=nj7;
	 if(t==8)
	 turno=nj8;
	 if(t==9)
	 turno=nj9;
	 if(t==10)
	 turno=nj10;
			bot.sendMessage(msg.chat.id,"Ahora es el turno de "+turno+".\nDa click en /votos para continuar.");
		}
		}
		else
		bot.sendMessage(msg.chat.id,"Solo "+turno-1+" puede cambiar el punto que marcó.");
		})
	bot.onText(/^\/undo|^\/Undo/, (msg) => {
		bot.sendMessage(msg.chat.id,"Solo la persona que marcó el ultimo punto lo puede deshacer.\nConfirme deshacer dando click en /deshacer.\nSi no, solo ignore este mensaje.");
		})

bot.onText(/^\/deshacer|^\/Deshacer/, (msg) => {
	t=t-1;
if(t==1)
turno=nj1; 
if(t==2)
 turno=nj2;
 if(t==3)
 turno=nj3;	
 if(t==4)
 turno=nj4;
 if(t==5)
 turno=nj5;
 if(t==6)
 turno=nj6;
 if(t==7)
 turno=nj7;
 if(t==8)
 turno=nj8;
 if(t==9)
 turno=nj9;
 if(t==10)
 turno=nj10;
	if(msg.from.first_name==turno)
	{
		bot.sendMessage(msg.chat.id,"Para remover el ultimo punto asignado, da click en /Removepoint\nDa click en /Changepoint para solo cambiarlo.");	
	}
	})	

bot.onText(/^\/score|^\/Puntuacion/, (msg) => {
bot.sendMessage(msg.chat.id,"Puntuación: " + "\n Resistencia: " + rp + "\n Espias: " + ep);
    
    })
;