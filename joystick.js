
const { Board, Led,Joystick ,Button} = require("johnny-five");
var board = new Board();

board.on("ready", function() {

  // Create a new `joystick` hardware instance.
  var joystick = new Joystick({
    //   [ x, y ]
    pins: ["A0", "A1"]
  });
  var button = new Button(2)

  joystick.on("change", function() {
    const LedRigth = new Led(6);
    const LedLeft = new Led(3);
    const LedFrond = new Led(5);
    const LedBack = new Led(9);
    
    if(Math.round(this.x) === 1){
      LedRigth.on();
    }else if (Math.round(this.x) === -1 ) {
      LedLeft.on();
    }else if(Math.round(this.y) === 1){
      LedBack.on();
    }

    console.log("Joystick");
    console.log("  x : ", this.x);
    console.log("  y : ", this.y);

    button.on("down", function() {
      LedFrond.on();
    });
  
    button.on("release", function() {
      LedFrond.off();
    });
    

    console.log("--------------------------------------");
  });
});
