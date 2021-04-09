function reset(){
    setTimeout(function () {
        history.go(0);
      }, 5000);
}
function isSelected(){
    alert("Select Any Player");
}
function blockPlayerX(){
    document.getElementById("player1").disabled = true;
    document.getElementById("player2").disabled = false;
}
function blockPlayerO(){
    document.getElementById("player1").disabled = false;    
    document.getElementById("player2").disabled = true;  
     
}
function whoIsTheWinner(){
     let a = document.getElementById('0').getAttribute('data-value');
     let b = document.getElementById('1').getAttribute('data-value');
     let c = document.getElementById('2').getAttribute('data-value');

     let d = document.getElementById('3').getAttribute('data-value');
     let e = document.getElementById('4').getAttribute('data-value');
     let f = document.getElementById('5').getAttribute('data-value');

     let g = document.getElementById('6').getAttribute('data-value');
     let h = document.getElementById('7').getAttribute('data-value');
     let i = document.getElementById('8').getAttribute('data-value');

///Check Row
    
///Draw Match 
if(a != null && b != null && c!= null && d != null && e != null && f != null && g != null && h != null && i != null)
{
    document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Match Draw</div>"
    reset()
}

    ///Row1
     if(a != null && a == b && a == c){
         if (a == 1){
             document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
             reset()
         }
         if(a == 0){
             document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
             reset()
         }
         
     }

     ///Row 2
     if (d != null && d == e && d == f){
        if (d == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(d == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
            reset()
        }
     }
      
     ///Row3
     if (g != null && g == h && g == i){
        if (g == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(g == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
            reset()
        }
     }
    
///Check column
    ///Col1
    if (a != null && a == d && a == g){
        if (a == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(a == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
            reset()
        }
     }

    ///Col2 
    if (b != null && b == e && b == h){
        if (b == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(b == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
            reset()
        }
     }

     ///Col3
     if (c != null && c == f && c == i){
        if (c == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(c == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
        reset()
        }
     }
///Diagonal Check
      ///Cross 1
      if (a != null && a == e && a == i){
        if (a == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(a == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
            reset()
        }
     }

     ///Cross2
     if (c != null && c == e && c == g){
        if (c == 1){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 1 Won the Match</div>"
            reset()
        }
        if(c == 0){
            document.getElementById('winner').innerHTML = "<div class='alert alert-success span' role='alert'>Player 2 Won the Match</div>"
            reset()
            
        }
     }

}

function playX(){

    document.getElementsByTagName('div')[1].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[2].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[3].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[5].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[6].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[7].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[9].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[10].setAttribute("onclick", "play1(this.id)")
    document.getElementsByTagName('div')[11].setAttribute("onclick", "play1(this.id)")


    var player1 = document.getElementById('player1');
    var style1 = document.createAttribute("class");
    style1.value = 'btn btn-danger';
    player1.setAttributeNode(style1);

    var player2 = document.getElementById('player2');
    var style2 = document.createAttribute("class");
    style2.value = 'btn button2';
    player2.setAttributeNode(style2);

    whoIsTheWinner()
}


function playO(){

    document.getElementsByTagName('div')[1].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[2].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[3].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[5].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[6].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[7].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[9].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[10].setAttribute("onclick", "play2(this.id)")
    document.getElementsByTagName('div')[11].setAttribute("onclick", "play2(this.id)")




    var player1 = document.getElementById('player1');
    var style1 = document.createAttribute("class");
    style1.value = 'btn button1';
    player1.setAttributeNode(style1);

    var player2 = document.getElementById('player2');
    var style2 = document.createAttribute("class");
    style2.value = 'btn btn-primary';
    player2.setAttributeNode(style2);
    whoIsTheWinner()
}

