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
var derecha = 0;
var bajar = 0;
var izquierda = 0;
var tab = 0;
function mover_invader() {

    if (mueve == 0) {

	//generamos un n�mero aleatorio entero entre 0 y 4
        //aleat = Math.round(aleat);	//ya que el fantasma solo puede ir hacia arriba, hacia abajo, hacia la derecha o hacia la izquierda
while(tab != 8){
        while(derecha != 10){

                    $("#invader").animate({"left": "+=1em"}, 500); //movemos el fantasma
                    derecha++;
                    bajar = 1; 
                }
         while (bajar == 1){    
             $("#invader").animate({"top": "+=1em"}, 500); 
             bajar--;
         }   
         while(izquierda != 10){
                    $("#invader").animate({"left": "-=1em"}, 500); //movemos el fantasma
                    izquierda++;
                    bajar = 1; 
             
         }
         while (bajar == 1){    
             $("#invader").animate({"top": "+=1em"}, 500); 
             bajar--;
         }  
         derecha = 0;
         izquierda = 0;
         tab++;
}

   /*             else {	//Si nos salimos del tablero restablecemos la variable aux y volvemos a intentar mover el fantasma

                            aux = yg + 1;
                if (aux < 2) {

                    $("#invader").animate({"top": "+=1em"}, 100);
                    yg += 1;
                    $('#fy').val(yg);

                    //comprueba();

                }
                

                else {
                
                    xg=10;    
                aux = xg + 1 ;
                if (aux > 1) {

                    $("#invader").animate({"left": "-=1em"}, 100);
                    xg -= 1;
                    $('#fx').val(xg);

                    //comprueba();		

                }
                else{
                    aux = yg;
                    mover_invader();
                }
                }
                }


                aux = xg - 1;
                if (aux > 1) {

                    $("#invader").animate({"left": "-=1em"}, 100);
                    xg -= 1;
                    $('#fx').val(xg);

                    //comprueba();		

                }

                else {

                    aux = xg;
                    mover_invader();
                }

                if( cohete== 1){
                aux = yg + 1;
                if (aux < 10) {

                    $("#invader").animate({"top": "+=1em"}, 100);
                    yg += 1;
                    $('#fy').val(yg);

                    //comprueba();

                }
                }

                else {
                    aux = yg;
                    mover_invader();
                }*/

    
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

