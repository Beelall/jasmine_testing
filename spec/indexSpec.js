
describe("moveImgRight specification tests (with setup and tear-down)", function() {
  var testImg=document.createElement("img");
	var gc = new GameController();
  
  beforeEach(function() {
    testImg.style.left='100px';
  });

  afterEach(function() {
    testImg.style.left='0px';
  });

	it("should return 200px when moving right", function() {
		expect(gc.moveImgRight(testImg).style.left).toEqual('200px');
	});

	it("should return 0px when moving left", function() {
		expect(gc.moveImgLeft(testImg).style.left).toEqual('0px');
	});
	
	it("should return 0px when moving top", function(){
		expect(gc.imgJump(testImg).style.top).toEqual('0px');
	});


	it("it tracks that the spy was called for the right", function() {
		spyOn(gc, 'moveImgRight');
		gc.moveRight();
    expect(gc.moveImgRight).toHaveBeenCalled();
  });

  it("it tracks that the spy was called for the left", function() {
		spyOn(gc, 'moveImgLeft');
		gc.moveLeft();
    expect(gc.moveImgLeft).toHaveBeenCalled();
  });
  
  
  
  it("it tracks that the spy was called for top", function() {
		spyOn(gc, 'imgJump');
		gc.jump();
    expect(gc.imgJump).toHaveBeenCalled();
  });
  
  it("it tracks that the spy was called for down", function() {
		spyOn(gc, 'imgDown');
		gc.down();
    expect(gc.imgDown).toHaveBeenCalled();
  });
 
});

