var x = 1;  //Definimos la posici�n inicial de PACMAN (ojo porque tal y como est� definido 
var y = 1; //hay que ubicarlo con los estilos y con las variables internas de control x e y

var invaders = new Array(20);

for (i = 1; i < 21; i++) {

    invaders[i] = new Array(20);

}
	invaders[4][1]=1;
        invaders[4][2]=1;
        invaders[4][3]=1;
        invaders[4][4]=1;
        invaders[4][5]=1;
	invaders[5][1]=1;
        invaders[5][2]=1;
        invaders[5][3]=1;
        invaders[5][4]=1;
        invaders[5][5]=1;
	invaders[6][1]=1;
        invaders[6][2]=1;
        invaders[6][3]=1;
        invaders[6][4]=1;
        invaders[6][5]=1;
        invaders[7][1]=1;
        invaders[7][2]=1;
        invaders[7][3]=1;
        invaders[7][4]=1;
        invaders[7][5]=1;
        invaders[8][1]=1;
        invaders[8][2]=1;
        invaders[8][3]=1;
        invaders[8][4]=1;
        invaders[8][5]=1;
        invaders[9][1]=1;
        invaders[9][2]=1;
        invaders[9][3]=1;
        invaders[9][4]=1;
        invaders[9][5]=1;
        invaders[10][1]=1;
        invaders[10][2]=1;
        invaders[10][3]=1;
        invaders[10][4]=1;
        invaders[10][5]=1;
        invaders[11][1]=1;
        invaders[11][2]=1;
        invaders[11][3]=1;
        invaders[11][4]=1;
        invaders[11][5]=1;    
        invaders[12][1]=1;
        invaders[12][2]=1;
        invaders[12][3]=1;
        invaders[12][4]=1;
        invaders[12][5]=1;         
        invaders[13][1]=1;
        invaders[13][2]=1;
        invaders[13][3]=1;
        invaders[13][4]=1;
        invaders[13][5]=1;
        invaders[14][1]=1;
        invaders[14][2]=1;
        invaders[14][3]=1;
        invaders[14][4]=1;
        invaders[14][5]=1;  
        invaders[15][1]=1;
        invaders[15][2]=1;
        invaders[15][3]=1;
        invaders[15][4]=1;
        invaders[15][5]=1;
        invaders[16][1]=1;
        invaders[16][2]=1;
        invaders[16][3]=1;
        invaders[16][4]=1;
        invaders[16][5]=1;           
        


for (i = 1; i < 21; i++) {	//Con estos bucles cogemos la matriz obst�culos y donde haya un 1 ponemos un cuadro de obst�culo
    //Donde haya un 2 ponemos una pastilla con premio
    //Donde haya cualquier otra cosa (que no sea un tres) ponemos una pastilla normal
    for (j = 1; j < 21; j++) {

        var equis = i - 1;
        var ygriega = j - 1;


        switch (invaders[i][j])
        {
            case 3:
                break;

            case 1:

                $("#tablero").append('<div id="' + i + '-' + j + 'a" class="invader" style="top:' + ygriega + 'em; left:' + equis + 'em"><img class="invader" src="img/invader1.png"/></div>');
                break;

            case 2:
              /*  $("#tablero").append('<div id="' + i + '-' + j + 'a" class="premio" style="top:' + ygriega + 'em; left:' + equis + 'em">o</div>');
                break;*/

            default:
               /* $("#tablero").append('<div id="' + i + '-' + j + 'a" class="pastilla" style="top:' + ygriega + 'em; left:' + equis + 'em">o</div>');*/
        }
    }

}