

$(document).ready(function(){

	function showTime(){
		var currTime=new Date();
		var hours = currTime.getHours();
		var minutes = currTime.getMinutes();
		var seconds = currTime.getSeconds();
		var meridian="AM";
		var clockDiv=document.getElementById('clock');

		if(seconds<10)
			seconds='0'+seconds;

		if(hours>12){
			hours-=12;
			meridian="PM";
		}
		if(hours==0)
			hours=12;

		clockDiv.innerText = hours + ':' + minutes + ':' + seconds+ " "+ meridian;
		clockDiv.innerText=clockDiv.innerText+'\n'+'hrs:min:sec';

	}
	showTime();
	setInterval(showTime, 500);

});