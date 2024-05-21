function monthlySavings(monthlyPayments, monthlyLivingCost) 
{
    
    if (!Array.isArray(monthlyPayments) || typeof monthlyLivingCost !== 'number') 
        {
            return "invalid input";
        }
  
    var totalIncome = 0;
    
    for (var i = 0; i < monthlyPayments.length; i++) 
        {
            var monthlyPayment = monthlyPayments[i];
  
            if (monthlyPayment >= 3000) 
                {
                    var taxAmount = monthlyPayment * 0.2;
                    monthlyPayment -= taxAmount;
                }
  
            totalIncome += monthlyPayment;
        }

    var savingsAmount = totalIncome - monthlyLivingCost;
  
    return savingsAmount;

}

var paymentsInput = prompt("Enter monthly payment values: ");
var livingCost = parseInt(prompt("Enter monthly living cost: "));


var payments = paymentsInput.split(",").map(function (payment) 
{
  return parseInt(payment.trim());
});

//   var payments = [900, 2700, 3400]
//   var livingCost = 10000;

  
var savings = monthlySavings(payments, livingCost);

if (savings < 0)
{
    console.log("earn more");
}

else
{
    console.log(savings);

}