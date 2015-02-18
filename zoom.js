	var w=0,h=0,w1,h1;  
	var xt,yt;
	   var ban=0;
	   var env_ini=150;
	   var url;
	$(document).ready(function()
	{
		$("body").append('<canvas id="zoom" width="300" height="300">'+
				'Su navegador no permite utilizar canvas.'+
			'</canvas>');
		$("#zoomID").click(hacer_zoom);
			$("#zoom").click(function(){
				env_ini=env_ini/2;
			});
			$("#zoom").on('contextmenu',function(e){
		        e.preventDefault();
				env_ini=env_ini*2;
		    });
	});
	
	function hacer_zoom(){
			ban=1;
			$("#zoom").css("display","inline");
			$("#img_mostrar").mousemove(function(e){
				var div=$("#img_mostrar").offset();
				if (ban==1){
					w1=document.getElementById("img_mostrar").offsetWidth;
		   			h1=document.getElementById("img_mostrar").offsetHeight;
					$("#zoom").css("left",(event.pageX)+"px");
					$("#zoom").css("top",(event.pageY)+"px");
					xt=(((((event.pageX-50) - div.left)*100)/w1)/100);
					yt=(((((event.pageY-50) - div.top)*100)/h1)/100);
					dibujar(xt,yt,env_ini);
				}
				if ((event.pageX - div.left)<=0 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
				if ((event.pageY - div.top)<=-20 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
				if ((event.pageX - w1 - div.left)>=0 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
				if ((event.pageY - h1 - div.top)>=0 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
			});
			$("#zoom").mousemove(function(e){
				var div=$("#img_mostrar").offset();
				if (ban==1){
					w1=document.getElementById("img_mostrar").offsetWidth;
		   			h1=document.getElementById("img_mostrar").offsetHeight;
					$("#zoom").css("left",(event.pageX-150)+"px");
					$("#zoom").css("top",(event.pageY-150)+"px");
					xt=(((((event.pageX-50) - div.left)*100)/w1)/100);
					yt=(((((event.pageY-50) - div.top)*100)/h1)/100);
					dibujar(xt,yt,env_ini);
				}
				if ((event.pageX - div.left)<=0 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
				if ((event.pageY - div.top)<=-20 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
				if ((event.pageX - w1 - div.left)>=0 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
				if ((event.pageY - h1 - div.top)>=0 && ban==1){
					$("#zoom").hide(100);
					$("#zoom").css("display","none");
					ban=0;
					env_ini=150;
				}
			});
	}
	function cambiar(nameImg){
		$("#contenedor_img").html('<img id="img_mostrar" src="'+url+nameImg+'.jpg"/>');
		for (var j=0;j<imagenes.length;j++){
			if (imagenes[j]==nameImg){
				puntero=j;
			}
		}
		h=0;
		w=0;
	}
	var imagenes=[];
	var puntero_name=0;
	function numerar(nombre){
		imagenes[puntero_name]=nombre;
		puntero_name++;
	}
	var puntero=0;
	function siguiente(){
		puntero++;
		if (puntero<puntero_name){
			$("#contenedor_img").html('<img id="img_mostrar" src="'+url+imagenes[puntero]+'.jpg"/>');
			h=0;
			w=0;
		}else{
			puntero--;
		}
	}

	function atras(){
		if (puntero>0){
			puntero--;
			$("#contenedor_img").html('<img id="img_mostrar" src="'+url+imagenes[puntero]+'.jpg"/>');
			h=0;
			w=0;
		}
	}

	function retornarLienzo(x) {
	  var canvas = document.getElementById(x);
	  if (canvas.getContext) {
	    var lienzo = canvas.getContext("2d");   
	    return lienzo;
	  } else
	    return false;
	}
	var tomar=0;
	function dibujar(x,y,inicial) {
	  var lienzo=retornarLienzo("zoom");
	  if (lienzo) {
	    lienzo.fillStyle="rgb(0,0,0)";
	    lienzo.fillRect(0,0,300,300);
	    img1 = new Image(); 
	    img1.src = url+imagenes[puntero]+'.jpg';
	    w=img1.width;
	    h=img1.height;
	    var trozoX=x*w;
	    var trozoY=y*h;
	    tomar=((w*inicial)/1600);
	    img1.onload = function(){ 
	      lienzo.drawImage(img1,trozoX,trozoY,tomar,tomar,0,0,300,300);
	    }  
	  }
	}
