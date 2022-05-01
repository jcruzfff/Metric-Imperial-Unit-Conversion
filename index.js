let length = document.getElementById("length")
let volume = document.getElementById("volume")
let mass = document.getElementById("mass")

let unitConverter = () => {
    let userInputInt = document.getElementById("user-input").value;  
    
    length.textContent = `${userInputInt} meters = ${(userInputInt * 3.28084).toFixed(3)} feet | ${userInputInt} feet = ${(userInputInt / 3.28084).toFixed(3)} meters`;
    
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


