window.onload = () => {
    let button = document.getElementById("button");
    
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};

function calculateBMI() {
  
    /* Getting input from user into height variable.
    Input is string so typecasting is necessary. */
    let height = parseInt(document
            .getElementById("height").value);
  
    /* Getting input from user into weight variable. 
    Input is string so typecasting is necessary.*/
    let weight = parseInt(document
            .getElementById("weight").value);
  
    let result = document.getElementById("result");
  
    // Checking the user providing a proper
    // value or not
    if (height === "" || isNaN(height)) 
        result.innerHTML = "Type a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        result.innerHTML = "Type a valid Weight!";
  
    // If both input is valid, calculate the bmi
    else {
  
        // Fixing upto 2 decimal places
        const bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        // Dividing as per the bmi conditions
        if (bmi < 18.5) result.innerHTML =
            `Your BMI: <span>${bmi}</span>(Under Weight)`;
  
        else if (bmi >= 18.5 && bmi < 24.9) 
            result.innerHTML = 
                `Your BMI: <span>${bmi}</span>(Normal)`;
  
        else result.innerHTML =
            `Your BMI: <span>${bmi}</span>(Over Weight)`;
    }
}