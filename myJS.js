//Fetching value of slider
function fetchInterest(){
	var sliderObj = document.getElementById("InterestRate");
	sliderObj.oninput = function() {
		document.getElementById("InterestRateSpan").innerHTML = this.value;
	}
	
	document.getElementById("outputDiv").style.display = 'none';           // Hide
	document.getElementById("ErrorSpan").style.display = 'none';           // Hide

}
	
function calcTotal(){

	document.getElementById("outputDiv").style.display = 'none';           // Hide
	var varPrinciple = 0
	var varSInterest = 0

	varPrinciple = document.getElementById("AmountField").value;
	varSInterest = document.getElementById("InterestRate").value;
	document.getElementById("InterestRateSpan").innerHTML = varSInterest;
	
	var finalInterest = (varSInterest/100);
	var varNoOfYears = document.getElementById("NoOfYears").value;
	var FinalAmout = 0;
	//var FinalString = "if you deposit " + varPrinciple + ",<br> at an interest rate of " + varSInterest + ". <br> You will recieve an amount of ";

	
	
	if (varPrinciple>0)
	{
		//fine
	}else
	{
		document.getElementById("AmountField").focus();
		document.getElementById("AmountField").value = 0;
		alert("Amount should be greater than 0");
	}

	if (varSInterest>0)
	{
		//fine
	}else
	{
		document.getElementById("InterestRate").focus();	
		alert("Interest Rate should be greater than 0");
	}

	if (varNoOfYears>0)
	{
		//fine
	}else
	{
		document.getElementById("NoOfYears").focus();	
		alert("Interest Rate should be greater than 0");
	}

	console.log("Hello");
	console.log("varSInterest: " + varSInterest);
	console.log("finalInterest: " + finalInterest);
	//console.log(FinalString);

	// amount = P(1+rt);
	FinalAmout = varPrinciple * ( 1 + (finalInterest * varNoOfYears));
	console.log("FinalAmout: " + FinalAmout);

	var interestAmount = FinalAmout - varPrinciple;


	if (FinalAmout > 0 )
	{
		//FinalString = FinalString + FinalAmout + ", <br> after " + varNoOfYears + " years.";	
		
		
		document.getElementById("varPrincipleID").innerHTML = varPrinciple;
		document.getElementById("varSInterestID").innerHTML = varSInterest;
		document.getElementById("FinalAmoutID").innerHTML = FinalAmout;
		document.getElementById("varNoOfYearsID").innerHTML = varNoOfYears;
		document.getElementById("interestAmountID").innerHTML = interestAmount;
		
		//Adding Interest Logic
		//FinalString = FinalString + "<br> Interest Amount: " + interestAmount;
		//document.getElementById("outputDiv").innerHTML = FinalString;
		
		document.getElementById("outputDiv").style.display = 'block';          // Show
		
	}else
	{
		//Exception case which might not happen	- this will not v
		
		FinalString = "Please check values";	
		document.getElementById("ErrorSpan").innerHTML = FinalString;
		
		//document.getElementById("outputDiv").style.display = 'block';          // Show
		document.getElementById("ErrorSpan").style.display = 'block';           // Hide
	}

}