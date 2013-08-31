//Application Window Component Constructor
function ApplicationWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
		top:0,
		bottom:0,
		left:0,
		right:0,
		height:480,
		width:320,
	})
	
	
	var saludo  = Titanium.UI.createLabel({
		text:'saludos',
		top:20,
		color:'#000',
	});
	
	var nombre = Titanium.UI.createTextField({
		top:100,
		height:30,
		width:200,
		hintText:'aqui pon tu nombre',
		borderColor:'#000',
		keyboardType:Titanium.UI.KEYBOARD_EMAIL,
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
	});
	
	var password = Titanium.UI.createTextField({
		top:200,
		height:30,
		width:200,
		hintText:'aqui pon tu pass',
		borderColor:'#000',
		passwordMask:true,
	});
	
	var enviar = Titanium.UI.createButton({
		top:300,
		height:40,
		width:150,
		title:'envia',
		// backgroundImage:'none',
	});
	
	
	self.addEventListener('click',function(e){
		// alert('click en la ventana');
		nombre.blur();
		password.blur();
	});
	
	self.add(saludo);
	self.add(nombre);
	self.add(password);
	self.add(enviar);
	return self;

}

//make constructor function the public component interface
module.exports = ApplicationWindow;
