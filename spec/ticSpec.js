
describe("testing TicTac (with setup and tear-down)", function() {
  var testImg=document.createElement("img");
	var tc = new TicTac();

  


it("it tracks that the spy was called for vari function", function() {
		spyOn(tc, 'vari');
		tc.CallVari();
    expect(tc.vari).toHaveBeenCalled();
  });
  

  
  

	});