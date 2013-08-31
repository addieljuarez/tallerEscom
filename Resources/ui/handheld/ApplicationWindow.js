//Application Window Component Constructor
function ApplicationWindow() {
	var self = Titanium.UI.createWindow({
		backgroundColor:'red',
	})
	
	
	var texto  = Titanium.UI.createLabel({
		text:'saludos',
	});
	
	texto.addEventListener('click', function(e){
		alert('saludos');
	});
	
	
	self.add(texto)
	return self;

}

//make constructor function the public component interface
module.exports = ApplicationWindow;
