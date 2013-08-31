/**
 * @author Addiel
 */
function MainWindow(){
	var self = Titanium.UI.createWindow({
		backgroundColor:'#fff',
		// layout:'vertical',
		layout:'horizontal',
	});
	
	var ejemplo = Titanium.UI.createLabel({
		text:'ejemplo',
		color:'#000',
	});
	
	var boton = Titanium.UI.createButton({
		title:'test',
		height:40,
		width:100,
	});
	
	self.add(boton);
	self.add(ejemplo);
	
	return self;
}
module.exports = MainWindow;