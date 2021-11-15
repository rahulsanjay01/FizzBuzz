function getValues()
{
    //- 1.) Declared the variable "fizzValue" using "let" and assigned it to the value that is found in the HTML element with the id "fizzValue" using document.getElementById.
    let fizzValue = document.getElementById("fizzValue").value;

    //- 2.) Declared the variable "buzzValue" using "let" and assigned it to the value that is found in the HTML element with the id "buzzValue" using document.getElementById.
    let buzzValue = document.getElementById("buzzValue").value;

    //- 3.) Using parseInt() to convert "fizzValue" and "buzzValue" to an integer.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //- 4.) Testing if "fizzValue" and "buzzValue" are integers using an if-statement.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData and write the values to the screen
        displayData(fbArray);
        //Alerting the user if "fizzValue" and "buzzValue" are not Numbers.
    }else{
        alert("You must enter a integer")
    }
}

//do fizzBuzz
function FizzBuzz(fizzValue, buzzValue)
{
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        //checking to see if the number is divisible by 3, 5, or both
        //pushing fizz, buzz, or fizzBuzz into the array if divisible by 3, 5, or both
        if (i % fizzValue == 0 && i % buzzValue == 0){
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    returnArray;

}
//loop over the array and create a tablerow for each item.
function displayData(fbArray){

}


