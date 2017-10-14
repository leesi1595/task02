//透明条高度自适应页面
function getHeight() {
	var h=document.body.clientHeight;
	var col=document.getElementById("col").getElementsByTagName('li');
	for(var i = 0; i < col.length; i++){
		col[i].style.height = h + 'px';
	}
}

getHeight();