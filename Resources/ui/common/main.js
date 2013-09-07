/**
 * @author Addiel
 */
function MainWindow(){
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
		layout:'vertical',
		// layout:'horizontal',
	});
	
	var Web  = require('ui/common/web');
	var ImageView = require('ui/common/imageView');
	var JSON = require('ui/common/json');
	
	
	
	
	var boton1 = Titanium.UI.createButton({
		title:'web',
		height:40,
		width:100,
		top:10,
	});
	
	var boton2 = Titanium.UI.createButton({
		title:'ImageView',
		height:40,
		width:100,
		top:10,
	});
	
	var boton3 = Titanium.UI.createButton({
		title:'JSON',
		height:40,
		width:100,
		top:10,
	});
	var boton4 = Titanium.UI.createButton({
		title:'test',
		height:40,
		width:100,
		top:10,
	});
	var boton5 = Titanium.UI.createButton({
		title:'test',
		height:40,
		width:100,
		top:10,
	});
	
	boton1.addEventListener('click', function(e){
		var web = new Web();
		web.open();
	});
	
	boton2.addEventListener('click', function(e){
		var imageView = new ImageView();
		imageView.open();
	});
	
	
	boton3.addEventListener('click', function(e){
		var json = new JSON();
		json.open();
	});
	
	
	self.add(boton1);
	self.add(boton2);
	self.add(boton3);
	self.add(boton4);
	self.add(boton5);
	
	
	return self;
}
module.exports = MainWindow;