window.onload=function()
{
	var oList=document.getElementById("list");
	var Menu=document.getElementById("menu");
	var WeChat=document.getElementById("WeChat");
	var aDiv=document.getElementById("wec");;
	var Search=document.getElementById("search");
	var oTimer=null;
	/*
	Search.onmouseout=function()
	{
		var i=aDiv.length-1;
		clearInterval(oTimer);
		oTimer=setInterval(function(){
			aDiv[i].className="";
			i--;
			if(i<0)
			{
				clearInterval(oTimer);
			}
		},50);	
	};*/
	WeChat.onmouseover=function()
	{
		var i=0;
		//alert('333');
		clearInterval(oTimer);
		aDiv.className="open";
		/*oTimer=setInterval(function(){
			
			clearInterval(oTimer);
		},100);*/
	};
	Menu.onmouseover=function()
	{
		oList.style.display='block';
	}
	Menu.onmouseout=function()
	{		
		oTimer=setTimeout(function(){
			oList.className="menu-down animated flipOutX";			
		},1000);
	}
};