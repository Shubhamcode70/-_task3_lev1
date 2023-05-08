function convert() {
	const temperature = document.getElementById("temperature").value;
	const unit = document.getElementById("unit").value;
	let result = "";

	if (unit === "celsius") 
    {
		const fahrenheit = temperature * 9/5 + 32;
		const kelvin = parseFloat(temperature) + 273.15;
		result = `${fahrenheit.toFixed(2)} °F / ${kelvin.toFixed(2)} K`;
	} 
    
    else if (unit === "fahrenheit") {
		const celsius = (temperature - 32) * 5/9;
		const kelvin = (parseFloat(temperature) + 459.67) * 5/9;
		result = `${celsius.toFixed(2)} °C / ${kelvin.toFixed(2)} K`;
	} 
    else 
    {
		const celsius = temperature - 273.15;
		const fahrenheit = temperature * 9/5 - 459.67;
		result = `${celsius.toFixed(2)} °C / ${fahrenheit.toFixed(2)} °F`;
	}

	document.getElementById("result").innerHTML = result;
}
