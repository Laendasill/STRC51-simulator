//run.js

var test = new ButtonArray("keyboard");
test.makeButtons();
var interval;
function run(speed=1000){
  var u15 = document.getElementById("u15");
  var u12 = document.getElementById("u12");
  var format = document.getElementById("binary");
  var format2 = document.getElementById("hex");
  var i = 0;
  var hexes = ["11011110","11101101","01111011","10110111"];
  var q = function(i,r=false,u12=false){
    var ret = hexes[i].toString(16);
    if(r===true){
      ret = "0x" + parseInt(hexes[i],2).toString(16);
    }
    if(u12 === true){
      
    }

    return ret;
  };
  interval = setInterval(function(){
    var form = false;
    if(format.checked == true){
      form = false;
    } else if(format2.checked == true){
      form = true;
    }
    if(i == 4){
      i = 0;
    }
    u15.innerHTML = `U15 = ${q(i,form)}`;
    var el = test.checkRow(i);
    if(!isNaN(el)){
      console.log(el);
      var str = `U12 = ${q(el,false)}`;
      u12.innerHTML =   str;
    }else{
      console.log("no click detected "  );
    };
    i++;
  },speed);


}
function stop(interval){
  window.clearInterval(interval);
}


document.getElementById("start").addEventListener("click",function(e){

  var speed = parseInt(document.getElementById("speed").value);
  if(speed === NaN){
    speed = 1000;
  }
  if(this.innerHTML == "Start"){
    run(speed);
    this.innerHTML = "Stop";
  }else{
    stop(interval);
    this.innerHTML = "Start";
  }
  console.log(interval);
});
