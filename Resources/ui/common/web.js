function Web(){
	
	var self = Titanium.UI.createWindow({
		backgroundColor:'pink',
	});
	
	var remote = Titanium.UI.createWebView({
		top:0,
		height:'50%',
		backgroundColor:'red',
		url:'http://www.youtube.com/watch?v=FGDAJg1Jrfw',
	});
	
	
	
	var local = Titanium.UI.createWebView({
		top:'50%',
		bottom:0,
		backgroundColor:'#000',
		url:'ui/common/index.html',
	})
	
	self.add(remote);
	self.add(local);
	return self;
}
module.exports =Web;