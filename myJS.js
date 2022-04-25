function calcTotal(){

var varPrinciple = document.getElementById("AmountField").value;
var varSInterest = document.getElementById("InterestRate").value;
var finalInterest = (varSInterest/100);
var varNoOfYears = document.getElementById("NoOfYears").value;
var FinalAmout = 0;
var FinalString = "if you deposit " + varPrinciple + ",<br> at an interest rate of " + varSInterest + ". <br> You will recieve an amount of ";


if (varPrinciple>0)
{
	//fine
}else
{
	alert("Amount should be greater than 0");
}

if (varSInterest>0)
{
	//fine
}else
{
	alert("Interest Rate should be greater than 0");
}

if (varNoOfYears>0)
{
	//fine
}else
{
	alert("Interest Rate should be greater than 0");
}

console.log("Hello");
console.log("varSInterest: " + varSInterest);
console.log("finalInterest: " + finalInterest);
console.log(FinalString);

// amount = P(1+rt);
FinalAmout = varPrinciple * ( 1 + (finalInterest * varNoOfYears));
console.log("FinalAmout: " + FinalAmout);

if (FinalAmout > 0 )
{
	FinalString = FinalString + FinalAmout + ", <br> after " + varNoOfYears + "years.";	
	document.getElementById("outputDiv").innerHTML = FinalString;
}else
{
	//Exception case which might not happen	
	FinalString = "Please check values";	
	document.getElementById("outputDiv").innerHTML = FinalString;
}

}