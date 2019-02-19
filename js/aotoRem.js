(function(){
    function w() {
	   	//获取html元素
		var html = document.getElementsByTagName('html')[0]; 
		//屏幕的宽度（兼容处理）
		var w = document.documentElement.clientWidth || document.body.clientWidth;
		
		//750这个数字是根据你的设计图的实际大小来的，所以值具体根据设计图的大小
		html.style.fontSize = w / 7.5 + "px";
	}
    w();
    window.addEventListener("resize", function() {//监听横竖屏切换
        w()
    }, false);
})();