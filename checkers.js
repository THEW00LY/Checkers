

class checkers {
    constructor(id, color, position){
        this.position = position;
        this.color = color;
        this.queen = false;
    }
    set CheckersPosition(position){
        return this.position = position;
    }
    get CheckersPosition(){
        return this.position;
    }

}

function IsaQueen(checkers){
    if(checkers.color = 'white' && checkers.CheckersPosition[0] == 7){
        checkers.queen = true;
    }
    if(checkers.color = 'black' && checkers.CheckersPosition[0] == 0){
        checkers.queen = true;
    }
}

function CreatMatrix(){
    var matrice= [];
    for (var i=0; i<8; i++) {
        matrice[i]=[]
        for (var j=0; j<8; j++) { 
            if(((i+j)%2) != 0 && i < 3){
                matrice[i][j] = -1;
            }
            else if(((i+j)%2) != 0 && i > 4){
                matrice[i][j] = 1;
            }
            else{
                matrice[i][j] = 0;
            }
        }
    } 
    return matrice;
}


function UpdatePositionChessboard(AllCheckersPosition, checkers){
    return AllCheckersPosition[checkers.position[0]][checkers.position[1]] = 0;
}  

function UpdatePositionCheckers(checkers, newposition){
    checkers.position[0], checkers.position[1] = newposition[0], newposition[1];
    return checkers;
}

function move() { 
  
    var mv = document.getElementById("checkers_black_9");
    var test = document.getElementById("test");
    var test1 = document.getElementById("test1");

  
    mv.addEventListener("click", function(){

        
        test.addEventListener("click", function(){

            var newsquare = document.getElementById("2");
  
            // Move checkers into target
            newsquare.appendChild(this);


        });
        
        
        test1.addEventListener("click", function(){

            var newsquare = document.getElementById("3");
  
            // Move checkers into target
            newsquare.appendChild(this);


        });
    
    }); 
} 

let board = [
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
  ];

        // add the piece if the case isn't empty
        if (board[i][j] === 1) {
            occupied = "bluePiece";
          } else if (board[i][j] === -1) {
            occupied = "redPiece";
          } else {
            occupied = "empty";
          }