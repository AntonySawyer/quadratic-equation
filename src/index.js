module.exports = function solveEquation(equation) {
	var ar = [];
	var bSt = equation.indexOf(' * x^2');
	var bEnd = equation.indexOf('* x ');
	var a =  equation.substring(0, bSt);
	var b = equation.substring(bSt + 8, bEnd);
	if (equation.charAt(bSt + 7) == '-') {
		var b = b*(-1);  	
	} 
	var c = equation.substring(bEnd + 5, equation.lenght);
		if (equation.charAt(bEnd + 4) == '-') {
			var c = c*(-1);  	
		} 
	var dis = b*b-4*a*c;
	var x1 = Math.round((-b-Math.sqrt(dis))/(2*a));
	var x2 = Math.round((-b+Math.sqrt(dis))/(2*a));
	ar.push(x1, x2);

	function compareNumbers(a, b) {
		return a - b; 
	};

 return ar.sort(compareNumbers);
}