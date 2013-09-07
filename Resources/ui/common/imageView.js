function IMAGEVIEW(){
	var self = Titanium.UI.createWindow({
		backgroundColor:'purple',
	});
	
	var contenedorImagenes = (function(){
		var self = Titanium.UI.createView({
			top:10,
			left:10,
			right:10,
			bottom:10,
			backgroundColor:'#fff',
			
		});
		
		self.local = Titanium.UI.createImageView({
			top:0,
			height:'50%',
			backgroundColor:'#000',
			width:320,
			image:'img/appcelerator.png'
		});
		
		self.remote = Titanium.UI.createImageView({
			top:'50%',
			height:'50%',
			backgroundColor:'red',
			width:320,
			image:'http://proximateapps.com/images/imageCont/APPC_landscape.png'
		});
		
		self.add(self.remote);
		self.add(self.local);
		
		return self;
	})();
	
	
	self.add(contenedorImagenes);
	return self;
}
module.exports = IMAGEVIEW;
