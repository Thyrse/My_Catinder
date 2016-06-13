var api = {

	body: document.querySelector('body'),
	container: document.querySelector('.content'),
	star: document.querySelector('#star'),
	cross: document.querySelector('#cross'),
	button: document.getElementsByClassName('button'),
	sound: new Audio(["sound/valid.mp3"]),
	fav: [],
	rejet: [],

	init: function() {
		var self = this;
		this.getApi(function () {
			self.swapImg();
			self.storageReject();
		});
	},

	getApi: function(callback) {
		self = this;
		this.body.classList.add('loading');
		console.log("dans getApi");

		$.get('http://catinder.samsung-campus.net/proxy.php', {}, function (data) {
			self.body.classList.remove('loading');

			var data = JSON.parse(data);
			console.log(data);
			for(var i = 0; i < data.nbResult; i++)
			{
				var img = document.createElement('img');
				img.setAttribute('src', data.results[i].picUrl);
				img.className = "img_cat";
				self.container.appendChild(img);
			}
			callback && callback();
		});
	},
	swapImg: function() {
		self = this;
		console.log("je passe");
/*		document.addEventListener('touchstart', function () {
			var catimg = document.querySelectorAll('.img_cat');
			console.log(catimg);
			for(var j = 0; j < catimg.length; j++)
			{
				console.log('yesssss');
				catimg[j].className += " test";
			}
		});*/
		var catimg2 = document.querySelectorAll('.img_cat');
		console.log(catimg2);
		catimg2[0].id = "indexfirst";
		this.star.addEventListener("touchstart", function(callback) {
			var catimg = document.querySelectorAll('.img_cat');
			/*			self.sound.play('sound/valid.mp3');*/
/*			setTimeout(function () {
				this.stop();
			}, 1000);*/
			console.log("fonction appelée");
			if(catimg[0])
			{
				self.storageFav();
				console.log("cat img " + catimg);
				catimg[0].removeAttribute('id');
				catimg[0].className += " animation";
				catimg[0].classList.remove('img_cat');
				console.log("y'en a");
				if(catimg.length > 1 && catimg[0].className === "animation")
				{
					catimg = document.querySelectorAll('.img_cat');
					catimg[0].id = "indexfirst";
				}
				if (catimg.length == 1)
				{
					console.log("relance");
					self.checkResult();
				}
			}
		});
		this.cross.addEventListener("touchstart", function(callback) {
			var catimg = document.querySelectorAll('.img_cat');
			/*			self.sound.play('sound/valid.mp3');*/
/*			setTimeout(function () {
				this.stop();
			}, 1000);*/
			if(catimg[0])
			{
				self.storageReject();
				console.log(catimg);
				catimg[0].removeAttribute('id');
				catimg[0].className += " animation";
				catimg[0].classList.remove('img_cat');
				console.log("y'en a");
				if(catimg.length > 1 && catimg[0].className === "animation")
				{
					catimg = document.querySelectorAll('.img_cat');
					catimg[0].id = "indexfirst";
				}
				if (catimg.length == 1)
				{
					console.log("relance");
					self.checkResult();
				}
			}	
		});
	},
	getClass: function() {
		self = this;
		var catimg2 = document.querySelectorAll('.img_cat');
		console.log(catimg2);
		catimg2[0].id = "indexfirst";
	},
	checkResult: function() {
		var catimg = document.querySelectorAll('.img_cat');
		if(!catimg[0])
		{
			self.getApi(function () {
				self.getClass();
			});
		}
	},
	storageFav: function() {/*
		self.star.addEventListener("touchstart", function () {*/
			var idFav = document.querySelectorAll('.img_cat');
			var urlFav = idFav[0].getAttribute('src');
			self.fav.push(urlFav);
			var favParse = JSON.stringify(self.fav);
			localStorage.setItem("favoris", favParse);
		},
		storageReject: function() {
			var idReject = document.querySelectorAll('.img_cat');
			var urlReject = idReject[0].getAttribute('src');
			self.rejet.push(urlReject);
			var rejectParse = JSON.stringify(self.rejet);
			localStorage.setItem("rejected", rejectParse);
		}
	}
	// this.getApi(function() {
	// 	swapImg();
	// });
	api.init();