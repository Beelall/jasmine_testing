function TicTac () {


if (document.all || document.getElementById) {
        document.write('<style>.tictac{')
        document.write('width:150px;height:150px;')
        document.write('}</style>')
    }

    var sqr1
    var sqr2
    var sqr3
    var sqr4
    var sqr5
    var sqr6
    var sqr7
    var sqr8
    var sqr9
    var sqr1T = 0
    var sqr2T = 0
    var sqr3T = 0
    var sqr4T = 0
    var sqr5T = 0
    var sqr6T = 0
    var sqr7T = 0
    var sqr8T = 0
    var sqr9T = 0
    var moveCount = 0
    var turn = 0
    var mode = 1

    this CallVari = function CallVari(){
		vari();
	}
	
	this.var = function vari() {
        sqr1 = document.tic.sqr1.value
        sqr2 = document.tic.sqr2.value
        sqr3 = document.tic.sqr3.value
        sqr4 = document.tic.sqr4.value
        sqr5 = document.tic.sqr5.value
        sqr6 = document.tic.sqr6.value
        sqr7 = document.tic.sqr7.value
        sqr8 = document.tic.sqr8.value
        sqr9 = document.tic.sqr9.value
		
		return sqr1;

    }
	
	function CallCheck(){
		check(s1, s2, s3, v1);
	}

    function check(s1, v1) {
		
		if(v1 == " X "){
		
		if(s1 == sqr1 || s1 == sqr2 || s1 == sqr3){
		
        if (sqr1 == " X " && sqr2 == " X " && sqr3 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr4 == " X " && sqr5 == " X " && sqr6 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr7 == " X " && sqr8 == " X " && sqr9 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr1 == " X " && sqr4 == " X " && sqr7 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr2 == " X " && sqr5 == " X " && sqr8 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr3 == " X " && sqr6 == " X " && sqr9 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else if (sqr3 == " X " && sqr5 == " X " && sqr7 == " X ") {
            alert("You Win!")
			return "Win";
            reset()
        } else {
            winCheck()
            check2()
            drawCheck()
        }
    }
	
	}
	
	}


    function check2() {
        vari()
        drawCheck()
        if (sqr1 == " O " && sqr2 == " O " && sqr3 == " O ") {
            alert("HAHA You Lose!")
			return "Lose"
            reset()
			
        } else if (sqr4 == " O " && sqr5 == " O " && sqr6 == " O ") {
            alert("LOSER!!!")
			return "Loser"
            reset()
			
        } else if (sqr7 == " O " && sqr8 == " O " && sqr9 == " O ") {
            alert("YOU ARE SO BAD")
			return"BAD"
            reset()
        } else if (sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") {
            alert("TRY AGAIN!!")
			return "AGAIN"
            reset()
        } else if (sqr1 == " O " && sqr4 == " O " && sqr7 == " O ") {
            alert("I AM THE BEST")
			return "BEST"
            reset()
        } else if (sqr2 == " O " && sqr5 == " O " && sqr8 == " O ") {
            alert("USE YOUR MIND!!")
			return "MIND"
            reset()
        } else if (sqr3 == " O " && sqr6 == " O " && sqr9 == " O ") {
            alert("PRACTICE MAKES PERFECT")
			return "PRACTICE"
            reset()
        } else if (sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") {
            alert("You Lose!")
			return "Lose"
            reset()
        } else if (sqr3 == " O " && sqr5 == " O " && sqr7 == " O ") {
            alert("Don't lose hope, try again!")
			return "again"
            reset()
        }
    }

    function player1Check() {
        if (sqr1 == " X " && sqr2 == " X " && sqr3 == " X ") {
            alert("Player 1 wins!")
			return "win"			
            reset()
        } else if (sqr4 == " X " && sqr5 == " X " && sqr6 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr7 == " X " && sqr8 == " X " && sqr9 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr1 == " X " && sqr4 == " X " && sqr7 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr2 == " X " && sqr5 == " X " && sqr8 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr3 == " X " && sqr6 == " X " && sqr9 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr1 == " X " && sqr5 == " X " && sqr9 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else if (sqr3 == " X " && sqr5 == " X " && sqr7 == " X ") {
            alert("Player 1 wins!")
			return "win"
            reset()
        } else {
            player2Check()
            drawCheck()
        }
    }

    function player2Check() {
        vari()
        drawCheck()
        if (sqr1 == " O " && sqr2 == " O " && sqr3 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr4 == " O " && sqr5 == " O " && sqr6 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr7 == " O " && sqr8 == " O " && sqr9 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr1 == " O " && sqr4 == " O " && sqr7 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr2 == " O " && sqr5 == " O " && sqr8 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr3 == " O " && sqr6 == " O " && sqr9 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr1 == " O " && sqr5 == " O " && sqr9 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        } else if (sqr3 == " O " && sqr5 == " O " && sqr7 == " O ") {
            alert("Player 2 wins!")
			return "win"
            reset()
        }
    }

    function drawCheck() {
        vari()
        moveCount = sqr1T + sqr2T + sqr3T + sqr4T + sqr5T + sqr6T + sqr7T + sqr8T + sqr9T
        if (moveCount == 9) {
            reset()
            alert("Draw")
        }
    }

    function winCheck() {
        check2()
        if (sqr1 == " O " && sqr2 == " O " && sqr3T == 0 && turn == 1) {
            document.tic.sqr3.value = " O "
            sqr3T = 1;
            turn = 0;
			var c = toString(sqr3T);
			var c1 = toString(turn);
			var c2 = "sqr3T" + c + "turn" + c1;
			return c2;
			
        } else if (sqr2 == " O " && sqr3 == " O " && sqr1T == 0 && turn == 1) {
            document.tic.sqr1.value = " O "
            sqr1T = 1;
            turn = 0;
			var c= toString(sqr1T);
			var c1 = toString(turn);
			var c2 = "sqr1T" + c + "turn" + c1;
			return c2;
        } else if (sqr4 == " O " && sqr5 == " O " && sqr6T == 0 && turn == 1) {
            document.tic.sqr6.value = " O "
            sqr6T = 1;
            turn = 0;
			var c = toString(squr6T);
			var c1 = toString (turn);
			var c2 = "sqr6T" + c + "turn" + c1;
			return c2;
        } else if (sqr5 == " O " && sqr6 == " O " && sqr4T == 0 && turn == 1) {
            document.tic.sqr4.value = " O "
            sqr4T = 1;
            turn = 0;
			var c = toString(squr4T);
			var c1 = toString (turn);
			var c2 = "sqr4T" + c + "turn" + c1;
			return c2;
        } else if (sqr7 == " O " && sqr8 == " O " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
			var c = toString (squr9T);
			var c1 = toString (turn);
			var c2 = "sqr9T" + c + "turn" + c1;
			return c2;
        } else if (sqr8 == " O " && sqr9 == " O " && sqr7T == 0 && turn == 1) {
            document.tic.sqr7.value = " O "
            sqr7T = 1;
            turn = 0;
			var c = toString (squr7TT);
			var c1 = toString (turn);
			var c2 = "sqr7T" + c + "turn" + c1;
			return c2;
        } else if (sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
			var c = toString (squr9T);
			var c1 = toString (turn);
			var c2 = "sqr9T" + c + "turn" + c1;
			return c2;
        } else if (sqr5 == " O " && sqr9 == " O " && sqr1T == 0 && turn == 1) {
            document.tic.sqr1.value = " O "
            sqr1T = 1;
            turn = 0;
			var c = toString (squr1TT);
			var c1 = toString (turn);
			var c2 = "sqr1T" + c + "turn" + c1;
			return c2;
        } else if (sqr3 == " O " && sqr5 == " O " && sqr7T == 0 && turn == 1) {
            document.tic.sqr7.value = " O "
            sqr7T = 1;
            turn = 0;
			var c = toString (squr7T);
			var c1 = toString (turn);
			var c2 = "sqr7T" + c + "turn" + c1;
			return c2;
        } else if (sqr7 == " O " && sqr5 == " O " && sqr3T == 0 && turn == 1) {
            document.tic.sqr3.value = " O "
            sqr3T = 1;
            turn = 0;
			var c = toString (squr3T);
			var c1 = toString (turn);
			var c2 = "sqr3T" + c + "turn" + c1;
			return c2;
        } else if (sqr1 == " O " && sqr3 == " O " && sqr2T == 0 && turn == 1) {
            document.tic.sqr2.value = " O "
            sqr2T = 1;
            turn = 0;
			var c = toString (squr2T);
			var c1 = toString (turn);
			var c2 = "sqr2T" + c + "turn" + c1;
			return c2;
        } else if (sqr4 == " O " && sqr6 == " O " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
			var c = toString (squr5T);
			var c1 = toString (turn);
			var c2 = "sqr5T" + c + "turn" + c1;
			return c2;
        } else if (sqr7 == " O " && sqr9 == " O " && sqr8T == 0 && turn == 1) {
            document.tic.sqr8.value = " O "
            sqr8T = 1;
            turn = 0;
			var c = toString (squr8T);
			var c1 = toString (turn);
			var c2 = "sqr8T" + c + "turn" + c1;
			return c2;
        } else if (sqr1 == " O " && sqr7 == " O " && sqr4T == 0 && turn == 1) {
            document.tic.sqr4.value = " O "
            sqr4T = 1;
            turn = 0;
			var c = toString (squr4T);
			var c1 = toString (turn);
			var c2 = "sqr4T" + c + "turn" + c1;
			return c2;
        } else if (sqr2 == " O " && sqr8 == " O " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
			var c = toString (squr5T);
			var c1 = toString (turn);
			var c2 = "sqr5T" + c + "turn" + c1;
			return c2;
        } else if (sqr3 == " O " && sqr9 == " O " && sqr6T == 0 && turn == 1) {
            document.tic.sqr6.value = " O "
            sqr6T = 1;
            turn = 0;
			var c = toString (squr6T);
			var c1 = toString (turn);
			var c2 = "sqr6T" + c + "turn" + c1;
			return c2;
        } else if (sqr1 == " O " && sqr5 == " O " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
			var c = toString (squr9T);
			var c1 = toString (turn);
			var c2 = "sqr9T" + c + "turn" + c1;
			return c2;
        } else if (sqr4 == " O " && sqr7 == " O " && sqr1T == 0 && turn == 1) {
            document.tic.sqr1.value = " O "
            sqr1T = 1;
            turn = 0;
			var c = toString (squr1T);
			var c1 = toString (turn);
			var c2 = "sqr1T" + c + "turn" + c1;
			return c2;
        } else if (sqr5 == " O " && sqr8 == " O " && sqr2T == 0 && turn == 1) {
            document.tic.sqr2.value = " O "
            sqr2T = 1;
            turn = 0;
			var c = toString (squr2T);
			var c1 = toString (turn);
			var c2 = "sqr2T" + c + "turn" + c1;
			return c2;
        } else if (sqr6 == " O " && sqr9 == " O " && sqr3T == 0 && turn == 1) {
            document.tic.sqr3.value = " O "
            sqr3T = 1;
            turn = 0;
			var c = toString (squr3T);
			var c1 = toString (turn);
			var c2 = "sqr3T" + c + "turn" + c1;
			return c2;
        } else if (sqr1 == " O " && sqr4 == " O " && sqr7T == 0 && turn == 1) {
            document.tic.sqr7.value = " O "
            sqr7T = 1;
            turn = 0;
			var c = toString (squr9T);
			var c1 = toString (turn);
			var c2 = "sqr7T" + c + "turn" + c1;
			return c2;
        } else if (sqr2 == " O " && sqr5 == " O " && sqr8T == 0 && turn == 1) {
            document.tic.sqr8.value = " O "
            sqr8T = 1;
            turn = 0;
			var c = toString (squr8T);
			var c1 = toString (turn);
			var c2 = "sqr8T" + c + "turn" + c1;
			return c2;
        } else if (sqr3 == " O " && sqr6 == " O " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
			var c = toString (squr9T);
			var c1 = toString (turn);
			var c2 = "sqr9T" + c + "turn" + c1;
			return c2;
        } else if (sqr1 == " O " && sqr9 == " O " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
			var c = toString (squr5T);
			var c1 = toString (turn);
			var c2 = "sqr5T" + c + "turn" + c1;
			return c2;
        } else if (sqr3 == " O " && sqr7 == " O " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
			var c = toString (squr5T);
			var c1 = toString (turn);
			var c2 = "sqr5T" + c + "turn" + c1;
			return c2;
        } else {
            computer()
        }
        check2()
    }

    function computer() {
        check2()
        if (sqr1 == " X " && sqr2 == " X " && sqr3T == 0 && turn == 1) {
            document.tic.sqr3.value = " O "
            sqr3T = 1;
            turn = 0;
        } else if (sqr2 == " X " && sqr3 == " X " && sqr1T == 0 && turn == 1) {
            document.tic.sqr1.value = " O "
            sqr1T = 1;
            turn = 0;
        } else if (sqr4 == " X " && sqr5 == " X " && sqr6T == 0 && turn == 1) {
            document.tic.sqr6.value = " O "
            sqr6T = 1;
            turn = 0;
        } else if (sqr5 == " X " && sqr6 == " X " && sqr4T == 0 && turn == 1) {
            document.tic.sqr4.value = " O "
            sqr4T = 1;
            turn = 0;
        } else if (sqr7 == " X " && sqr8 == " X " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
        } else if (sqr8 == " X " && sqr9 == " X " && sqr7T == 0 && turn == 1) {
            document.tic.sqr7.value = " O "
            sqr7T = 1;
            turn = 0;
        } else if (sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
        } else if (sqr5 == " X " && sqr9 == " X " && sqr1T == 0 && turn == 1) {
            document.tic.sqr1.value = " O "
            sqr1T = 1;
            turn = 0;
        } else if (sqr3 == " X " && sqr5 == " X " && sqr7T == 0 && turn == 1) {
            document.tic.sqr7.value = " O "
            sqr7T = 1;
            turn = 0;
        } else if (sqr7 == " X " && sqr5 == " X " && sqr3T == 0 && turn == 1) {
            document.tic.sqr3.value = " O "
            sqr3T = 1;
            turn = 0;
        } else if (sqr1 == " X " && sqr3 == " X " && sqr2T == 0 && turn == 1) {
            document.tic.sqr2.value = " O "
            sqr2T = 1;
            turn = 0;
        } else if (sqr4 == " X " && sqr6 == " X " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
        } else if (sqr7 == " X " && sqr9 == " X " && sqr8T == 0 && turn == 1) {
            document.tic.sqr8.value = " O "
            sqr8T = 1;
            turn = 0;
        } else if (sqr1 == " X " && sqr7 == " X " && sqr4T == 0 && turn == 1) {
            document.tic.sqr4.value = " O "
            sqr4T = 1;
            turn = 0;
        } else if (sqr2 == " X " && sqr8 == " X " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
        } else if (sqr3 == " X " && sqr9 == " X " && sqr6T == 0 && turn == 1) {
            document.tic.sqr6.value = " O "
            sqr6T = 1;
            turn = 0;
        } else if (sqr1 == " X " && sqr5 == " X " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
        } else if (sqr4 == " X " && sqr7 == " X " && sqr1T == 0 && turn == 1) {
            document.tic.sqr1.value = " O "
            sqr1T = 1;
            turn = 0;
        } else if (sqr5 == " X " && sqr8 == " X " && sqr2T == 0 && turn == 1) {
            document.tic.sqr2.value = " O "
            sqr2T = 1;
            turn = 0;
        } else if (sqr6 == " X " && sqr9 == " X " && sqr3T == 0 && turn == 1) {
            document.tic.sqr3.value = " O "
            sqr3T = 1;
            turn = 0;
        } else if (sqr1 == " X " && sqr4 == " X " && sqr7T == 0 && turn == 1) {
            document.tic.sqr7.value = " O "
            sqr7T = 1;
            turn = 0;
        } else if (sqr2 == " X " && sqr5 == " X " && sqr8T == 0 && turn == 1) {
            document.tic.sqr8.value = " O "
            sqr8T = 1;
            turn = 0;
        } else if (sqr3 == " X " && sqr6 == " X " && sqr9T == 0 && turn == 1) {
            document.tic.sqr9.value = " O "
            sqr9T = 1;
            turn = 0;
        } else if (sqr1 == " X " && sqr9 == " X " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
        } else if (sqr3 == " X " && sqr7 == " X " && sqr5T == 0 && turn == 1) {
            document.tic.sqr5.value = " O "
            sqr5T = 1;
            turn = 0;
        } else {
            AI()
        }
        check2()
    }

    function AI() {
        vari()
        if (document.tic.sqr5.value == "     " && turn == 1) {
            document.tic.sqr5.value = " O "
            turn = 0
            sqr5T = 1
        } else if (document.tic.sqr1.value == "     " && turn == 1) {
            document.tic.sqr1.value = " O "
            turn = 0
            sqr1T = 1
        } else if (document.tic.sqr9.value == "     " && turn == 1) {
            document.tic.sqr9.value = " O "
            turn = 0
            sqr9T = 1
        } else if (document.tic.sqr6.value == "     " && turn == 1) {
            document.tic.sqr6.value = " O "
            turn = 0
            sqr6T = 1
        } else if (document.tic.sqr2.value == "     " && turn == 1) {
            document.tic.sqr2.value = " O "
            turn = 0
            sqr2T = 1
        } else if (document.tic.sqr8.value == "     " && turn == 1) {
            document.tic.sqr8.value = " O "
            turn = 0
            sqr8T = 1
        } else if (document.tic.sqr3.value == "     " && turn == 1) {
            document.tic.sqr3.value = " O "
            turn = 0
            sqr3T = 1
        } else if (document.tic.sqr7.value == "     " && turn == 1) {
            document.tic.sqr7.value = " O "
            turn = 0
            sqr7T = 1
        } else if (document.tic.sqr4.value == "     " && turn == 1) {
            document.tic.sqr4.value = " O "
            turn = 0
            sqr4T = 1
        }
        check2()
    }

    function reset() {
        document.tic.sqr1.value = "     "
        document.tic.sqr2.value = "     "
        document.tic.sqr3.value = "     "
        document.tic.sqr4.value = "     "
        document.tic.sqr5.value = "     "
        document.tic.sqr6.value = "     "
        document.tic.sqr7.value = "     "
        document.tic.sqr8.value = "     "
        document.tic.sqr9.value = "     "
        sqr1T = 0
        sqr2T = 0
        sqr3T = 0
        sqr4T = 0
        sqr5T = 0
        sqr6T = 0
        sqr7T = 0
        sqr8T = 0
        sqr9T = 0
        vari()
        turn = 0
        moveCount = 0
    }

    function resetter() {
        reset()
    }
	
}