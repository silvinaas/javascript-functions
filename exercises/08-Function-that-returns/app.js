var dollarToEuro = function(dollarValue){
	return dollarValue * 0.89;
}
var euroToYen = function(euroValue){
	return euroValue * 124.15;
}
//***** YOUR CODE BELOW ↓ ******///

var euros = dollarToEuro(137);
var yen = euroToYen(euros);
console.log(yen);
