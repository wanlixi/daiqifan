window.onload=function(){
		var wrap=document.getElementById("wrap");
		var img =document.getElementsByClassName("bg");
		var body=document.getElementsByTagName("body");
		var niu = document.getElementById("niu");
		var namer = document.getElementById("mingzi");
		var tels = document.getElementById("tel");
		var play = document.getElementById("play");
		var video = document.getElementById("video");
		var page = document.getElementsByClassName("page");
		var vid=document.getElementById("vid");
		//用户名和手机号
		var namevalue = "";
		var telvalue = "";
		var index = 0;
		var bgl=document.getElementsByClassName("bgl");
		var bool=true;
		var ado =document.getElementById("ado");
		var sud=document.getElementById("sud");
		var succes=document.getElementById("sucess");
		var close=document.getElementById("close");		
close.addEventListener("touchstart",function(){
	sud.style.display="none";
		succes.style.display="none";
})
	
		for(var i = 0; i < page.length; i++) {
			page[i].index = i;
			page[i].bool=true;
			page[i].addEventListener("touchstart", function() {
				if(this.index != 2) {
					video.pause();
					toggleSound();
					vid.style.display = "block";
					
				}
				
			})
		}
		play.addEventListener("touchstart", function() {
			ado.pause();
			vid.style.display = "none";
			video.play();
		},false);
	
			niu.addEventListener("touchstart", function() {
			niu.style.width = 45 + "%";
			niu.style.left = 28 + "%";
			niu.style.top = 23 + "%";
			namevalue = namer.value;
			telvalue = tels.value;

		})
		niu.addEventListener("touchend", function() {
				niu.style.width = 50 + "%";
				niu.style.left = 25 + "%";
				niu.style.top = 22 + "%";
		var a=namevalue;
		var b=telvalue;
		if(a!=""&&b!=""){
			sud.style.display="block";
		succes.style.display="block";
		}else{
		sud.style.display="none";
		succes.style.display="none";
		}
		
		})
			function toggleSound() {
        var music = document.getElementById("ado");//获取ID
        if (music.paused) { //判读是否播放
                music.play(); //没有就播放
        }
}
	}


