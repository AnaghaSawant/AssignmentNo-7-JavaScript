var multiply,addition,substraction,division;
function Calculator()
{
	multiply = function(str)
	{
		multiplication = Number(arr[0] * arr[4])
		console.log(multiplication)
	}

	addition = function(str)
	{
		add = Number(arr[0]) + parseInt(arr[2] + Number(arr[4]))
		console.log(add)
	}

	substraction = function(str)
	{
		sub = Number(arr[0] - arr[4])
		console.log(sub)
	}

	division = function(str)
	{
		div = Number(arr[0] / arr[4])
		console.log(div)
	}

	this.evaluate = function(str)
	{
		arr = str.split('')	
		console.log(arr)
		if(arr[2] == '+')
		{
			addition(arr);
		}
		else if(arr[2] == '-')
		{
			substraction(arr);
		}
		else if(arr[2] == '*')
		{
			multiply(arr);
		}
		else
		{
			division(arr);
		}
		
	}
}

var calsy = new Calculator()
calsy.evaluate('9 + 3')


