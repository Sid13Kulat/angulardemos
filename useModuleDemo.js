var http = require('http');
var mymodule = require('./mymodule');

	http.createServer(function (req, res) {
		res.writeHead('200', {'Content-Type':'text/html'});
		res.write("Addition is \t"+mymodule.Addition(10,12)+"<br>");
		res.write("Substraction is \t"+mymodule.Substraction(41,27)+"<br>");
		res.write("Multiplication is \t"+mymodule.Multiplication(98,54)+"<br>");
		res.write("Division is \t"+mymodule.Division(70,12)+"<br>");
		res.end();
	}).listen(8090);
