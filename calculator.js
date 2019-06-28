var multiply,addition,substraction,division,round_function,maximum;
function Calculator()
{

	maximum = function(str)
	{
		array_to_string = str.toString()
		console.log(array_to_string)
		reg_ex = /(\d)/g
		number_array = array_to_string.match(reg_ex)
		console.log(number_array)
		max = Number(number_array[0]);
		for(var i = 1 ; i < number_array.lenght-1 ; i++)
		{
			if(Number(number_array[i]) > max)
			{
				max = number_array[i]
				console.log(max)
			}
		}
		
	}

	round_function = function(str)
	{
		k = arr[0].match(/(\d\.\d)/)
		str = k[0].toString()
		h = str.split('.')
		console.log(h[0])
	}

	multiply = function(str)
	{
		multiplication = Number(str[0] * str[4])
		console.log(multiplication)
	}

	addition = function(str)
	{
		add = Number(str[0]) + parseInt(str[2] + Number(str[4]))
		console.log(add)
	}

	substraction = function(str)
	{
		sub = Number(str[0] - str[4])
		console.log(sub)
	}

	division = function(str)
	{
		div = Number(str[0] / str[4])
		console.log(div)
	}

	this.evaluate = function(str)
	{
		arr = str.split(' ')	
		console.log(arr)

		if(str.match(/[a-zA-z0-9]*\(.*\)/))
		{
			console.log("it is a function")
			// round_function(arr);
			maximum(arr);
		}

		// if(arr.includes('+') && arr.includes('*'))
		// {
		// 	var mul = multiply(arr);
		// 	var sum = mul + addition(arr)
		// 	console.log(sum)
		// }

		else if(arr[2] == '+')
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
calsy.evaluate('9  +  3')
calsy.evaluate('maximum(2, 8)')
// calsy.evaluate('round(8.2)')
// calsy.evaluate('9  +  3  * 2')
// calsy.evaluate('kiwi + 5', kiwi: '2')


