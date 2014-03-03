	var x=1;  //Definimos la posici�n inicial de PACMAN (ojo porque tal y como est� definido 
	var y=1; //hay que ubicarlo con los estilos y con las variables internas de control x e y
	var puntos=0; //Iniciamos el contador de puntos a 0
	var pacman=0; //Creamos una variable que nos indica qui�n come y qui�n es comido
	var habilitado=false;

	//Creamos una matriz de 100 elementos
	var obstaculos=new Array(10);

	for (i=1;i<11;i++){

		obstaculos[i]=new Array(10);			
			
	}


	//Indicamos d�nde va a haber obst�culos
	obstaculos[1][1]=3;
	obstaculos[2][2]=1;	
	obstaculos[3][2]=1;
	obstaculos[4][2]=1;
	obstaculos[6][2]=1;
	obstaculos[7][2]=1;
	obstaculos[8][2]=1;
	obstaculos[9][2]=1;
	obstaculos[9][4]=1;
	obstaculos[8][4]=1;
	obstaculos[8][5]=1;
	obstaculos[6][4]=1;
	obstaculos[5][4]=1;
	obstaculos[5][5]=1;
	obstaculos[5][6]=1;
	obstaculos[6][6]=1;
	obstaculos[6][5]=1;
	obstaculos[6][4]=1;
	obstaculos[3][4]=1;
	obstaculos[3][5]=1;
	obstaculos[3][6]=1;
	obstaculos[3][7]=1;
	obstaculos[3][8]=1;
	obstaculos[2][9]=1;
	obstaculos[1][7]=1;
	obstaculos[1][6]=1;
	obstaculos[2][9]=1;
	obstaculos[5][9]=1;
	obstaculos[6][9]=1;
	obstaculos[7][9]=1;
	obstaculos[8][7]=1;
	obstaculos[9][7]=1;
	obstaculos[8][9]=1;
	obstaculos[9][9]=1;
	obstaculos[6][8]=1;
	obstaculos[2][5]=2;
	obstaculos[3][9]=2;


	//Definimos la ubicaci�n inicial del fantasma (como antes habr� que definirlo en los estilos y 
	//con las variables xg e yg

	var xg=4;
	var yg=4;
	var mueve=1; //esta variable es la que permite que se mueva el fantasma o lo deja quieto
	var juego=true; //triqui�uela para que cuando pierda no me salgan infinitos carteles de que he perdido
	
	//Esta variable nos permitir� posteriormente mejorar el movimiento del fantasma
	var aux;
	
	////////////////////
	///////////////////

	
	function cambio(){

		pacman=1;//podemos comernos al fantasma
		$('#fantasma').animate({opacity:0},200);
		$('.obstat').css( {"background-color":"yellow"});
		$('#derecha').animate({opacity:0},200);
		$('#arriba').animate({opacity:0},200);
		$('#izquierda').animate({opacity:0},200);
		$('#abajo').animate({opacity:0},200);
		$('#cerrado').animate({opacity:0},200);

	}


////////////////////
///////////////////


	function comprueba(){	//Creamos esta funci�n para comprobar si PACMAN y el fantasma han coincidido, y ver 
							//qui�n come a qui�n
			
			if (x==xg && y==yg) {
				if (pacman==0) {
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
					$("#ghost").animate({"top":"4em","left":"4em"},2000);
					$('#puntuacion').val(puntos+=1000);
					pacman=0;
					$('#fantasma').animate({opacity:1},2500);
					$('.obstat').css( {"background-color":"grey"});
				}
			}		

	}

////////////////////
///////////////////



	//Esta funci�n es la que genera el movimiento aleatorio del fantasma
	//Es llamada cada 500 milisegundos
	function mover_ghost(){
	
	if (mueve==0) {
		
		aleat = Math.random() * 3;	//generamos un n�mero aleatorio entero entre 0 y 4
		aleat = Math.round(aleat);	//ya que el fantasma solo puede ir hacia arriba, hacia abajo, hacia la derecha o hacia la izquierda
	
		switch (aleat) 
			{
			case 3: //si el n�mero aleatorio es 3, entonces movemos el fantasma hacia la derecha
				
				aux=xg+1;	//la variable aux nos indicar� DONDE ACABAR� Pacman si el movimiento se hace efectivo
				if (aux < 10) { //Si no nos salimos del tablero....
					if (obstaculos[aux][yg]!=1){	//Si el destino del fantasma NO es un obst�culo
						$("#ghost").animate({"left":"+=1em"},100); //movemos el fantasma
						xg+=1;	//recordar que tenemos que mover el estilo y la variable de control
						$('#fx').val(xg);	//Escribimos la nueva posici�n en el campo que hemos creado

						
					}
						else { mover_ghost();}	//Si, en cambio, la posici�n de destino es un obst�culo, volvemos a 
					aux=xg;				//mover aleatoriamente el fantasma

				}

				else {	//Si nos salimos del tablero restablecemos la variable aux y volvemos a intentar mover el fantasma

					aux=xg;
					mover_ghost();
					
				}

			break;
			
			case 2: //Si el n�mero aleatorio es 2, movemos el fantasma hacia la izquierda
			
				aux=xg-1;
				if (aux > 1){
					if (obstaculos[aux][yg]!=1){	
						$("#ghost").animate({"left":"-=1em"},100);	
						xg-=1;
						$('#fx').val(xg);

						comprueba();		

					}
					else { mover_ghost();}
					aux=xg;
				}
			
				else{
	
					aux=xg;
					mover_ghost();
				}

			break;
			
			case 1:	//Si el n�mero aleatorio es 1 movemos el fantasma hacia abajo
				
				aux=yg+1;
				if (aux < 10){
					if (obstaculos[xg][aux]!=1){
						$("#ghost").animate({"top":"+=1em"},100);	
						yg+=1;
						$('#fy').val(yg);

						comprueba();
					}
					else { mover_ghost();}
					aux=yg;
				}

				else{
					aux=yg;
					mover_ghost();
				}
			break;
				
			default:	//en cualquier otro caso (solo puede ser cero) lo movemos hacia arriba
			
				aux=yg-1;
				if (aux > 1){
					if (obstaculos[xg][aux]!=1){
						$("#ghost").animate({"top":"-=1em"},100);
						yg-=1;
						$('#fy').val(yg);

						comprueba();
					}
					else { mover_ghost();}
					aux=yg;
				}
		
				else{
					aux=yg;
					mover_ghost();
				}

			}
		}
	
	}
	
////////////////////
///////////////////


	setInterval ("mover_ghost()",500); //Con esta llamada hacemos que el fantasma se mueva cada 0.5 segundos hasta que acabe la partida
	
////////////////////
///////////////////

	$(document).ready(function(){ //Esta es la parte gruesa del interfaz
	
	$("#moneda").click(function(){		//Lo ponemos en marcha cuando hacemos clic en el bot�n
		if (mueve==1){
			mueve=0;
			habilitado=true;
			$("#moneda").val("PAUSA");
		}
		else{
			mueve=1;
			habilitado=false;
			$("#moneda").val("SEGUIR");
		}
	});

////////////////////
///////////////////
	
	for (i=1;i<11;i++){	//Con estos bucles cogemos la matriz obst�culos y donde haya un 1 ponemos un cuadro de obst�culo
				//Donde haya un 2 ponemos una pastilla con premio
				//Donde haya cualquier otra cosa (que no sea un tres) ponemos una pastilla normal
		for(j=1;j<11;j++){
		
			var equis=i-1;
			var ygriega=j-1;
		
		
			switch (obstaculos[i][j]) 
			{
			case 3:
				break;
			
			case 1:
					
				$("#tablero").append('<div id="'+i+'-'+j+'a" class="obstat" style="top:'+ygriega+'em; left:'+equis+'em"></div>');
				break;
			
			case 2:
				$("#tablero").append('<div id="'+i+'-'+j+'a" class="premio" style="top:'+ygriega+'em; left:'+equis+'em">o</div>');
				break;
				
			default:
				$("#tablero").append('<div id="'+i+'-'+j+'a" class="pastilla" style="top:'+ygriega+'em; left:'+equis+'em">o</div>');
			}
		}
		
	}
	
			
		
////////////////////
///////////////////
	
	
		$("body").keypress(function(e) { //Si pulsamos una tecla evaluamos cu�l hemos pulsado
		
		
		var code = (e.keyCode ? e.keyCode : e.which);
		comprueba();
	
		switch(code)
		{
		
		case 100: //pulsamos 'D'
		
			if ( x < 10)	//Si no nos salimos del tablero
				{
					
					if (obstaculos[x+1][y]!=1 && habilitado) //y no nos topamos con un obst�culo
						{	//movemos a PACMAN hacia la derecha
							habilitado=false;
							$('#pac').animate({"left":"+=1em"},500,function(){habilitado=true;});


							
							if(pacman==0)
							{
							$('#cerrado').animate({opacity:1},200,function(){ 	//esto sirve para hacer el efecto 
								$('#izquierda').css("opacity","0");		//de abrir boca-cerrar boca
								$('#arriba').css("opacity","0");
								$('#abajo').css("opacity","0");
								$('#derecha').css("opacity","1");
								$('#cerrado').animate({opacity:0},200);
								});
							}
							else
							{
							$('#cerradob').animate({opacity:1},200,function(){ 	//esto sirve para hacer el efecto 
								$('#izquierdab').css("opacity","0");		//de abrir boca-cerrar boca
								$('#arribab').css("opacity","0");
								$('#abajob').css("opacity","0");
								$('#derechab').css("opacity","1");
								$('#cerradob').animate({opacity:0},200);
							});
							}
							

							x +=1; //actualizamos variables
							$('#equis').val(x);	//mostramos variables
							
							if (obstaculos[x][y]==2){	//Comprobamos el tipo de pastilla en el que hemos ca�do
									$('#puntuacion').val(puntos+=200);	//si tiene premio sumamos 200
									cambio();
								}
								
								else if (obstaculos[x][y]!=3) {		//si no tiene premio solo 50
									$('#puntuacion').val(puntos+=50);	
								}
							obstaculos[x][y]=3;	//y hacemos desaparecer la pastilla (para no contarla varias veces)
							$('#'+x+'-'+y+'a').hide();
						}				
				}
		break;
		
		case 97: //pulsamos 'A'
							
			if ( x > 1) //Lo mismo de antes cuando vamos hacia la izquierda	
				{
					if (obstaculos[x-1][y]!=1 && habilitado)
						{
							habilitado=false;
							$('#pac').animate({"left":"-=1em"},500,function(){habilitado=true;});
							
							if(pacman==0){
							$('#cerrado').animate({opacity:1},200,function(){
									$('#derecha').css("opacity","0");
									$('#arriba').css("opacity","0");
									$('#abajo').css("opacity","0");
									$('#izquierda').css("opacity","1");
									$('#cerrado').animate({opacity:0},200);
									});
							}
							else
							{
							$('#cerradob').animate({opacity:1},200,function(){
									$('#derechab').css("opacity","0");
									$('#arribab').css("opacity","0");
									$('#abajob').css("opacity","0");
									$('#izquierdab').css("opacity","1");
									$('#cerradob').animate({opacity:0},200);
									});
							}
							
							x -=1;
							$('#equis').val(x);
							
							if (obstaculos[x][y]==2){
									$('#puntuacion').val(puntos+=200);
									cambio();	
								}
								
								else if (obstaculos[x][y]!=3) {
									$('#puntuacion').val(puntos+=50);	
								}
							obstaculos[x][y]=3;
							$('#'+x+'-'+y+'a').hide();
						}
				}
						
		break;
		
		case 115: //pulsamos 'S'
		
			if ( y < 10) //Lo mismo cuando vamos hacia abajo
				{
					if (obstaculos[x][y+1]!=1 && habilitado)
						{
							habilitado=false;
							$('#pac').animate({"top":"+=1em"},500,function(){habilitado=true;});
							
							if(pacman==0)
							{
							$('#cerrado').animate({opacity:1},200,function(){
									$('#izquierda').css("opacity","0");
									$('#arriba').css("opacity","0");
									$('#derecha').css("opacity","0");
									$('#abajo').css("opacity","1");
									$('#cerrado').animate({opacity:0},200);
									});
							}
							else
							{
							$('#cerradob').animate({opacity:1},200,function(){
									$('#izquierdab').css("opacity","0");
									$('#arribab').css("opacity","0");
									$('#derechab').css("opacity","0");
									$('#abajob').css("opacity","1");
									$('#cerradob').animate({opacity:0},200);
									});
							}
							
							y +=1;
							$('#ygriega').val(y);
							
							if (obstaculos[x][y]==2){
									$('#puntuacion').val(puntos+=200);	
									cambio();
							}
								
								else if (obstaculos[x][y]!=3) {
									$('#puntuacion').val(puntos+=50);	
								}
							
							obstaculos[x][y]=3;
							$('#'+x+'-'+y+'a').hide();
						}
				}
						
		break;

		case 119: //pulsamos 'W'
						
			if (y > 1) //Y lo mismo cuando vamos hacia arriba
				{
					if (obstaculos[x][y-1]!=1 && habilitado)
						{
							habilitado=false;
							$('#pac').animate({"top":"-=1em"},500,function(){habilitado=true;});
							
							if(pacman==0)
							{
							$('#cerrado').animate({opacity:1},200,function(){
									$('#izquierda').css("opacity","0");
									$('#derecha').css("opacity","0");
									$('#abajo').css("opacity","0");
									$('#arriba').css("opacity","1");
									$('#cerrado').animate({opacity:0},200);
									});
							}
							else
							{
							$('#cerradob').animate({opacity:1},200,function(){
									$('#izquierdab').css("opacity","0");
									$('#derechab').css("opacity","0");
									$('#abajob').css("opacity","0");
									$('#arribab').css("opacity","1");
									$('#cerradob').animate({opacity:0},200);
									});
							}
							
							y -=1;
							$('#ygriega').val(y);
							
							if (obstaculos[x][y]==2){
									
									$('#puntuacion').val(puntos+=200);
									cambio();	
								}
								
								else if (obstaculos[x][y]!=3) {
									$('#puntuacion').val(puntos+=50);	
								}
								
								obstaculos[x][y]=3;
							
							$('#'+x+'-'+y+'a').hide();
						}
				}
						
		}
	
		
	});
	
						
	});

	