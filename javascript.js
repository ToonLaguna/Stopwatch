var time = 0;
var on = 0;

function startStop(){
	if(on == 0){
		on = 1;
		increment();
		document.getElementById("startStop").innerHTML = "Pause";
	}else{
		on = 0;
		document.getElementById("startStop").innerHTML = "Resume";
	}
};

function restart(){
	on = 0;
	time = 0;
	document.getElementById("output").innerHTML = "00:00:00";
	document.getElementById("startStop").innerHTML = "Start";
};

function increment(){
	if(on == 1){
		setTimeout(function(){
			time++;
			var minutes = Math.floor(time / 10 / 60);
			if(minutes <= 9){
				minutes = "0" + minutes;
			}
			var seconds = Math.floor(time / 10);
			if(seconds <= 9){
				seconds = "0" + seconds;
			}
			var tenths = Math.floor(time % 10);
			if(tenths <= 9){
				tenths = "0" + tenths;
			}
			document.getElementById("output").innerHTML = minutes + ":" + seconds + ":" + tenths;
			increment();
		}, 100);
	}
};