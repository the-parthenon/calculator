const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[0];
	num1 = Number(tokens[1]);
	num2 = Number(tokens[2]);
	num3 = Number(tokens[3]);

	console.log("mathSymbol ", mathSymbol);
	console.log("num1 ", num1);
	console.log("num2 ", num2);
	console.log("num3 ", num3);

	// if (isNaN(num1)){

	// 	console.log("Your first number isn't a number!")

	// }
	
	// if (isNaN(num2)){

	// 	console.log("You didn't enter two numbers!")
	// }

	if(mathSymbol === "+"){
		
		if(isNaN(num3)){
			
			let result = num1 + num2;
			console.log("The result is ", result);

		}
		
		else{

			let result = num1 + num2 + num3;
			console.log("The result is ", result);
			
		}
	}

	else if(mathSymbol === "-"){
		
		let result = num1 - num2;
		console.log("The result is ", result);
	}

	else if(mathSymbol === "/"){

		let result = num1 / num2;
		console.log("The result is ", result);

	}

	else if(mathSymbol === "*"){

		let result = num1 * num2;
		console.log("The result is ", result);
	}

	else if(mathSymbol === "root"){

		let result = Math.sqrt(num1);
		console.log("The result is ", result);

	}

	else if (mathSymbol === "square"){

		let result = Math.pow(num1, 2);
		console.log("The result is ", result);
	}

	else if (mathSymbol === "cube"){

		let result = Math.pow(num1, 3);
		console.log("The result is ", result);
	}

	else if (mathSymbol === "^"){

		let result = Math.pow(num1, num2);
		console.log("The result is ", result);
	}

	else if (mathSymbol === "%"){

		let result = num1 % num2;
		console.log("The result is", result);
	}
	
	else{

		console.log("You are sure to be eaten by a grue.")

	}

	// This line closes the connection to the command line interface.
	reader.close()

});


