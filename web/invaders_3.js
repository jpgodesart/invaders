var x= 0;
var y=19;
var xg = 0;
var yg = 0;
var mueve = 1; //esta variable es la que permite que se mueva el fantasma o lo deja quieto
var juego = true; //triqui�uela para que cuando pierda no me salgan infinitos carteles de que he perdido
var cohete = 0;
//Esta variable nos permitir� posteriormente mejorar el movimiento del fantasma
var aux;
var pantalla = 0;
var aleat = 3;
var nave = 0;
var habilitado=false;



	function comprueba(){	//Creamos esta funci�n para comprobar si PACMAN y el fantasma han coincidido, y ver 
							//qui�n come a qui�n
			
			if (x==xg && y==yg) {
				if (nave==0) {
					habilitado=false;
					mueve=1;
					if (juego){  //as� consigo que SOLO me salga el cartel de perdido una vez
						alert("PERDISTE");
					}
					juego=false;
				}
				else
				{
					xg=5;
					yg=5;
					$("#invader").animate({"top":"4em","left":"4em"},2000);
					$('#puntuacion').val(puntos+=1000);
					nave=0;
					$('#invader').animate({opacity:1},2500);
					//$('.obstat').css( {"background-color":"grey"});
				}
			}		

	}














function mover_invader() {

    	if (mueve==0) {
            if(pantalla <=72){
		
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
                                        $('#aleat').val(aleat);
					mover_invader();
					
				}

			break;
			
			case 2: //Si el n�mero aleatorio es 2, movemos el fantasma hacia la izquierda
			
				aux=xg-1;
				if (aux > 0){
	
						$("#invader").animate({"left":"-=1em"},100);	
						xg-=1;
						$('#fx').val(xg);

						comprueba();		

					

					aux=xg;
				}
			
				else{
	
					aux=xg;
                                        aleat=4;
                                        $('#aleat').val(aleat);
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
                                        yg=0;
                                        aleat=2;
                                        $('#aleat').val(aleat);
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
                                        yg=0;
                                        aleat = 3;
                                        $('#aleat').val(aleat);
					mover_invader();
				}
			break;                        
				
			default:/*	//en cualquier otro caso (solo puede ser cero) lo movemos hacia arriba
			
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
				}*/

			}
                  $('#pantalla').val(pantalla);
                  pantalla++;
        }//iiiif
	          
                  
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


		$("body").keypress(function(e) { //Si pulsamos una tecla evaluamos cu�l hemos pulsado
		
		
		var code = (e.keyCode ? e.keyCode : e.which);
		comprueba();
	
		switch(code)
		{
		
		case 100: //pulsamos 'D'
		
			if ( x < 19)	//Si no nos salimos del tablero
				{
					

							habilitado=false;
							$('#nave').animate({"left":"+=1em"},500,function(){habilitado=true;});

							

							x +=1; //actualizamos variables
							$('#equis').val(x);	//mostramos variables

							//$('#'+x+'-'+y+'a').hide();
										
				}
		break;
		
		case 97: //pulsamos 'A'
							
			if ( x > 0) //Lo mismo de antes cuando vamos hacia la izquierda	
				{

							habilitado=false;
							$('#nave').animate({"left":"-=1em"},500,function(){habilitado=true;});							
							x -=1;
							$('#equis').val(x);

							//$('#'+x+'-'+y+'a').hide();
						
				}
						
		break;
						
		}
	
		
	});

