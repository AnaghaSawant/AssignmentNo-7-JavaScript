var multiply,addition,substraction,division,round,maximum;
var check;
function Calculator()
{
	this.store = function(obj)
	{
		this.temp_key = Object.keys(obj).toString()
		this.temp = Object.values(obj).toString()
	}

	maximum = function(str)
	{
		array_to_string = str.toString()
		reg_ex = /(\d)/g
		number_array = array_to_string.match(reg_ex)
		max = Number(number_array[0]);
		for(i = 1 ; i <= number_array.length-1 ; ++i)
		{
			if(Number(number_array[i]) > max)
			{
				max = number_array[i]
				console.log("maximum no is:", max)
			}
		}
		
	}

	round = function(str)
	{
		decimal_array = str.toString()
		reg_ex = /(\d\.\d)/g
		whole_no = decimal_array.match(reg_ex)
		no = Math.round(whole_no);
		console.log("this is round value:",no)
		
	}

	multiply = function(str)
	{
		multiplication = Number(str[0] * str[4])
		console.log(multiplication)
	}

	addition = function(str)
	{
		add = Number(str[0]) + parseInt(str[2] + Number(str[4]))
		console.log("addition is :", add)
	}

	substraction = function(str)
	{
		sub = Number(str[0] - str[4])
		console.log("substraction is : ", sub)
	}

	division = function(str)
	{
		div = Number(str[0] / str[4])
		// console.log("division is: ",div)
	}

	this.evaluate = function(str, obj)
	{
		arr = str.split(' ')	
		
		if(obj)
		{
			arr[0] = Object.values(obj)
		}

		if(arr[0] == this.temp_key)
		{
			arr[0] = this.temp
			console.log(this.temp)
		}

		if(this.temp >= arr[0])
		{
			check = true;
			console.log("boolean value is:",check);
		}

		if(str.match(/[a-zA-z0-9]*\(.*\)/))
		{
			round(arr);
		}

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
// calsy.evaluate('maximum(2, 8)')
calsy.evaluate('kiwi  +  5', {kiwi: 2})
calsy.evaluate('9  +  3')
// calsy.evaluate('maximum(2, 8)')
calsy.evaluate('round(8.70)')
calsy.store({peaches: 15})
calsy.evaluate('peaches  -  5')
// calsy.evaluate('9  +  3  * 2')
calsy.evaluate('peach >= 15')

