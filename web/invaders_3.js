var x = 1;  //Definimos la posici�n inicial de PACMAN (ojo porque tal y como est� definido 
var y = 1; //hay que ubicarlo con los estilos y con las variables internas de control x e y
//Definimos la ubicaci�n inicial del fantasma (como antes habr� que definirlo en los estilos y 
//con las variables xg e yg

var xg = 0;
var yg = 0;
var mueve = 1; //esta variable es la que permite que se mueva el fantasma o lo deja quieto
var juego = true; //triqui�uela para que cuando pierda no me salgan infinitos carteles de que he perdido
var cohete = 0;
//Esta variable nos permitir� posteriormente mejorar el movimiento del fantasma
var aux;

var aleat = 3;
function mover_invader() {

    	if (mueve==0) {
		
			//generamos un n�mero aleatorio entero entre 0 y 4
		//aleat = Math.round(aleat);	//ya que el fantasma solo puede ir hacia arriba, hacia abajo, hacia la derecha o hacia la izquierda
	
		switch (aleat) 
			{
			case 3: //si el n�mero aleatorio es 3, entonces movemos el fantasma hacia la derecha
				
				aux=xg+1;	//la variable aux nos indicar� DONDE ACABAR� Pacman si el movimiento se hace efectivo
				if (aux < 10) { //Si no nos salimos del tablero....

						$("#invader").animate({"left":"+=1em"},100); //movemos el fantasma
						xg+=1;	//recordar que tenemos que mover el estilo y la variable de control
						$('#fx').val(xg);	//Escribimos la nueva posici�n en el campo que hemos creado

						
					

					aux=xg;				//mover aleatoriamente el fantasma

				}

				else {	//Si nos salimos del tablero restablecemos la variable aux y volvemos a intentar mover el fantasma

					aux=xg;
                                        aleat=1;
					mover_invader();
					
				}

			break;
			
			case 2: //Si el n�mero aleatorio es 2, movemos el fantasma hacia la izquierda
			
				aux=xg-1;
				if (aux > 1){
	
						$("#invader").animate({"left":"-=1em"},100);	
						xg-=1;
						$('#fx').val(xg);

						comprueba();		

					

					aux=xg;
				}
			
				else{
	
					aux=xg;
                                        aleat = 4;
					mover_invader();
				}

			break;
			
			case 1:	//Si el n�mero aleatorio es 1 movemos el fantasma hacia abajo
				
				aux=yg+1;
				if (aux < 2){

						$("#invader").animate({"top":"+=1em"},100);	
						yg+=1;
						$('#fy').val(yg);

						comprueba();


					aux=yg;
				}

				else{
					aux=yg;
                                        aleat=2;
					mover_invader();
				}
			break;
                        
			case 4:	//Si el n�mero aleatorio es 1 movemos el fantasma hacia abajo
				
				aux=yg+1;
				if (aux < 2){

						$("#invader").animate({"top":"+=1em"},100);	
						yg+=1;
						$('#fy').val(yg);

						comprueba();


					aux=yg;
				}

				else{
					aux=yg;
                                        aleat = 3;
					mover_invader();
				}
			break;                        
				
			default:	//en cualquier otro caso (solo puede ser cero) lo movemos hacia arriba
			
				aux=yg-1;
				if (aux > 1){

						$("#invader").animate({"top":"-=1em"},100);
						yg-=1;
						$('#fy').val(yg);

						comprueba();
					

					aux=yg;
				}
		
				else{
					aux=yg;
					mover_invader();
				}

			}
		}
	
	}

///////////////////

setInterval ("mover_invader()",500); //Con esta llamada hacemos que el fantasma se mueva cada 0.5 segundos hasta que acabe la partida


$(document).ready(function() { //Esta es la parte gruesa del interfaz

    $("#moneda").click(function() {		//Lo ponemos en marcha cuando hacemos clic en el bot�n
        if (mueve == 1) {
            mueve = 0;
            habilitado = true;
            $("#moneda").val("PAUSA");
        }
        else {
            mueve = 1;
            habilitado = false;
            $("#moneda").val("SEGUIR");
        }
    });
});

