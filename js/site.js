function getValues()
{
    //Declared the variable "fizzValue" using "let" and assigned it to the value that is found in the HTML element with the id "fizzValue" using document.getElementById.
    let fizzValue = document.getElementById("fizzValue").value;

    //Declared the variable "buzzValue" using "let" and assigned it to the value that is found in the HTML element with the id "buzzValue" using document.getElementById.
    let buzzValue = document.getElementById("buzzValue").value;

    //Using parseInt() to convert "fizzValue" and "buzzValue" to an integer.
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //Testing if "fizzValue" and "buzzValue" are integers using an if-statement.
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //Calling fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //Calling displayData and write the values to the screen
        displayData(fbArray);
        //Alerting the user if "fizzValue" and "buzzValue" are not Numbers.
    } else {
        alert("You must enter an integer")
    }
}

//Executing fizzBuzz
function fizzBuzz(fizzValue, buzzValue)
{
    let returnArray = [];

    //For-Loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
        //Checking to see if the number is divisible by 3, 5, or both
        //Pushing fizz, buzz, or fizzBuzz into the array if divisible by 3, 5, or both
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
    return returnArray;

}
//Looping over the array and creating a tablerow for each item.
function displayData(fbArray){

    //Retrieve the table body element from the page
    let tableBody = document.getElementById("results"); 

    //Getting the template row
    let templateRow = document.getElementById("fbTemplate");

    //Clearing the table first
    tableBody.innerHTML = "";
    
    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        //Using the columns in the template 
        let rowCols = tableRow.querySelectorAll("td");
        
        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index + 1];
        
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index + 2];
        
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index + 3];
        
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index + 4];

        tableBody.appendChild(tableRow);
    }
    
    //Adding all the rows to the table

}


