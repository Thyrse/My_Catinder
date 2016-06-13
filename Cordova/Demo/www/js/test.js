document.addEventListener('touchstart', function (e) {
	alert("yolo");
})
		document.addEventListener("click", function(e) {
			var el = e.target||event.srcElement;
			el.className += " animation";
			/*alert(el.getAttribute('src'));*/
		});