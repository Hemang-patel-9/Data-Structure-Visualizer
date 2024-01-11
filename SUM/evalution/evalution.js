//global variables 
let choice = "Prefix";
function selection() {
	let dropdown = document.getElementById('drpd');
	dropdown.onchange = () => {
		let selectedOption = dropdown.options[dropdown.selectedIndex];
		choice = selectedOption.value;
	}
}
function Convert() {
	let val = document.getElementById('inputBox').value;
	val = val.trim();
	let arr = val.split(" ");
	console.log("without filtered " + arr);
	arr = arr.filter((n) => {
		return n;
	});
	console.log(arr);
	prefixToInfix(arr, choice);
}

function prefixToInfix(arr, type) {
	let i = 0, operand1 = 0, operand2 = 0, tableString = "";
	let stack = [];

	if (type == 'Prefix') {
		arr = arr.reverse();
	}

	while (i < arr.length) {
		if (arr[i] == '+' || arr[i] == '-' || arr[i] == '*' || arr[i] == '/' || arr[i] == '$' || arr[i] == '^') {
			if (type == 'Prefix') {
				operand1 = Number.parseFloat(stack.pop());
				operand2 = Number.parseFloat(stack.pop());
			}
			else {
				operand2 = Number.parseFloat(stack.pop());
				operand1 = Number.parseFloat(stack.pop());
			}

			switch (arr[i]) {
				case '+': stack.push(Number.parseInt(operand1 + operand2));
					break;
				case '-': stack.push(Number.parseInt(operand1 - operand2));
					break;
				case '*': stack.push(Number.parseInt(operand1 * operand2));
					break;
				case '/': stack.push(Number.parseInt(operand1 / operand2));
					break;
				case '^': stack.push(Number.parseInt(Math.pow(operand1 , operand2)));
					break;
				case '$': stack.push(Number.parseInt(Math.pow(operand1, operand2)));
					break;
			}
			tableString += `<tr><td>${i + 1}</td><td>${arr[i]}</td><td>${stack}</td></tr>`
			console.log("converted =>" + stack);
		}
		else {
			stack.push(arr[i]);
			console.log("pushed =>" + stack);
			tableString += `<tr><td>${i + 1}</td><td>${arr[i]}</td><td>${stack}</td></tr>`
		}
		i++;
		console.log("stack => " + stack);
	}

	console.log(stack.pop());
	document.getElementById("tableDiv").style.display = "block";
	document.getElementById("table").innerHTML = "<tr><th>Sr. No.</th><th>Input Symbol</th><th>Stack</th></tr>" + tableString;
}