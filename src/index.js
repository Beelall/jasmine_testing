function GameController() {
	

this.imgObj = null;
            
           this.init= function init(){
               imgObj = document.getElementById('backMov');
               imgObj.style.position= 'relative'; 
               imgObj.style.left = '0px'; 
			   imgObj.style.top = '0px';
            }
            
           this.moveRight = function moveRight (){
				this.moveImgRight(this.imgObj);
			}	
			
          this.moveImgRight = function moveImgRight (myImgObj){
               myImgObj.style.left = parseInt(myImgObj.style.left) + 100 + 'px';
			   return myImgObj;
            }
			
			this.moveLeft =  function moveLeft(){
               this.moveImgLeft(this.imgObj);
            }
			
			this.moveImgLeft = function moveImgLeft(myImgObj){
               myImgObj.style.left = parseInt(myImgObj.style.left) - 100 + 'px';
			   return myImgObj;
            }
			
			this.jump = function jump(){
               this.imgJump(this.imgObj);
            }
			
			this.imgJump = function imgJump (myImgObj){
               myImgObj.style.top = parseInt(myImgObj.style.top) - 100 + 'px';
			   return myImgObj;
            }
            
			this.down = function down (){
               this.imgDown(this.imgObj);
            }
			
			this.imgDown = function imgDown(imgObj){
               imgObj.style.top = parseInt(imgObj.style.top) + 100 + 'px';
            }
			
            this.play = function play(){
			var audio = document.getElementById("audio");
				audio.play();
            }
				 

    
}     