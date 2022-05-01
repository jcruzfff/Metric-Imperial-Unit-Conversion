I created a calculation system.

# Metric/Imperial unit conversion:

1. Meters/Feet
  _-Length
2. Liters/Gallons
  _- Volume
3. Kilograms/Pounds
  _- Mass
  
  

This site was built using [Scrimba](https://scrimba.com/scrim/co2404bb7b527e59459c81d14)

<img width="368" alt="Metric Converter" src="https://user-images.githubusercontent.com/95213271/166163617-ebcb030d-b437-4ca4-a493-e6f3e057cf8e.png">

:earth_americas: :+1:

**Learning is awesome!!** and _I am hapy to be here_ 


```
<html>
    <head><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css">
        <link rel="stylesheet" href="index.css">
    </head>
    <body>
            <h1>Metric/Imperial unit conversion:</h1>
            
            <input id="user-input" placeholder= "0" type="number" oninput="unitConverter()">
            <p id="length-el">Length (Meters/Feet):</p>
                <p id="length"></p>
            <p id="volume-el">Volume (Liters/Gallons):</p>        
                <p id="volume"></p>
            <p id="mass-el">Mass (Kilograms/Pounds):</p>    
                <p id="mass"></p>
                
            <script src="index.js"></script>
    </body>
</html>



let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

let unitConverter = () => {
   let userInputInt = document.getElementById("user-input").value; 
   length.textContent = `${userInputInt} meters = ${(userInputInt * 3.28084).toFixed(3)} feet | ${userInputInt} feet = ${(userInputInt /     3.28084).toFixed(3)} meters`;
    
   volume.textContent = `${userInputInt} liters = ${(userInputInt * 0.264172).toFixed(3)} gallons | ${userInputInt} gallons = ${(userInputInt / 0.264172).toFixed(3)} liters`;
    
   mass.textContent = `${userInputInt} kilograms = ${(userInputInt * 2.204623).toFixed(3)} pounds | ${userInputInt} pounds = ${(userInputInt / 2.204623).toFixed(3)} kilograms`;
};



// function calculateFeet() { 
//     let result = Math.floor(num1 * 3.2)
//     length.textContent = num1 + " meters = " + result + " feet | " + result + " feet = " + num1 + " meters";

//   }
  
// function calculateGallons() { 
//     let result = Math.floor(num1 * 0.264)
//     volume.textContent = num1 + " liters = " + result + " gallons | " + result + " gallons = " + num1 + " liters"
//   }
  
// function calculatePounds() { 
//     let result = Math.floor(num1 * 2.2)
//     mass.textContent = num1 + " kilos = " + result + " pounds | " + result + " pounds = " + num1 + " kilos"
//   }
```

I tried using the commented out section and couldnt understand how to connect the html to the button.


