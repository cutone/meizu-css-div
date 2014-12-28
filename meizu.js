var backimg = document.getElementById('slide-wrap').getElementsByTagName('div'),
    backbutt = document.getElementById('bullet').getElementsByTagName('a'),
    index,getCurIndex;
var getCurIndex = function(){
	for(var i = 0; i < backimg.length; i++){
		if(backbutt[i].className.indexOf('selected') != -1)
			return i;
	}
}
var move = function(flag){
	index = getCurIndex();
	if(flag){
		index++;
	    if(index > backimg.length - 1)
	    	index = 0;
	}	
	else if(!flag){
		index--;
		if(index < 0)
			index = backimg.length - 1;
	}
	display(index);	
}
var display = function(index){
    for(var i = 0; i < backbutt.length; i++){
    	backimg[i].style.display = "none";
        backbutt[i].className = "";
    }
    backimg[index].style.display = "block";
    backbutt[index].className = "selected";
}
var autoStart = function(){
	setInterval(function(){move(true);},3000);
}
for(var i = 0; i < backbutt.length; i++){
    backbutt[i].onclick = function(){
    	for(var j = 0; j < backbutt.length; j++){
    		if(this == backbutt[j])
    			index = j;
    	}
    	display(index);
    }
}

var pro = document.getElementById('navigation'),
    sub = document.getElementById('meizu-header-products').getElementsByTagName('a');

var showPro = function(){
	pro.className = "navigation";
}
var hiddenPro = function(){
	pro.className = "pre-nav";
}
for(var i = 0; i < sub.length; i++){
	sub[i].onmouseover = function(){
		for(var j = 0; j < sub.length; j++){
			if(this == sub[j])
				var k = j;
		}
		for(var l = 0; l < sub.length; l++){
			sub[l].style.opacity = "0.5";
		}
		sub[k].style.opacity = "1";
	}   
}
