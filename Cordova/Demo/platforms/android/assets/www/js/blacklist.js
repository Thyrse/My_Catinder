var blackFound = {
	
	container: document.querySelector('.content'),

	affFav: function () {
		var json = localStorage.getItem("rejected");
		var data = JSON.parse(json);
		var self = this;

			data.forEach(function(value, index) {
				var img = document.createElement('img');
				img.setAttribute('src', value);
				img.className = "blacklist";
				self.container.appendChild(img);
			});
	},
	init: function() {
		this.affFav();
	},
}
blackFound.init();