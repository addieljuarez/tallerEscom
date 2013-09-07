function JSON1(){
	var self = Ti.UI.createWindow({
		backgroundColor:'#fff',
	});
	var objeto;
	var table = Titanium.UI.createTableView({
		backgroundColor:'red',
	})
	var tableData = [];
	
	var url = "http://www.azteca.com/historico/index/more/format/json?program=272&string=&category=0&type=2&page=-2&numItems=30&imgW=65&imgH=65";
	 var client = Ti.Network.createHTTPClient({
	     onload : function(e) {
	         // Ti.API.info("Received text: " + this.responseData);
	         // alert(this.responseData);
	         objeto = JSON.parse(this.responseData);
	         // alert(objeto);
	        
	        for (var i=0; i < objeto.items.length; i++) {
			  var objeto2 = objeto.items[i];
			  // alert(objeto2);
			  var row = Titanium.UI.createTableViewRow({
			  	height:100,
			  	width:320,
			  });
			  
			  var titulo = Titanium.UI.createLabel({
			  	color:'#000',
			  	left:10,
			  	top:10,
			  	text:objeto2.title,
			  	width:190,
			  });
			  
			  
			  var imagen = Titanium.UI.createImageView({
			  	right:10,
			  	borderColor:'#000',
			  	borderRadius:3,
			  	image:objeto2.img,
			  	height:90,
			  	width:90,
			  });
			  
			  row.add(titulo);
			  row.add(imagen);
			  tableData.push(row);
			  table.setData(tableData);
			};
			
			self.add(table);
	         
	         
	         // alert(objeto2);
	         
	         
	     },
	     onerror : function(e) {
	         Ti.API.debug(e.error);
	         alert('conecta a internet');
	     },
	     timeout : 5000  // in milliseconds
	 });
	 
	 
	 
	 client.open("GET", url);
	 
	 client.send();
	
	
	
	return self;
}
module.exports = JSON1;