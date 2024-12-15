/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

const costperday = document.querySelector("#calculated-cost");
const numberofdays = document.querySelectorAll(".day-selector li");
const fullDayButton = document.querySelector("#full");
const halfDayButton = document.querySelector("#half");
const clearButton = document.querySelector("#clear-button");
const calculatedCostText = document.querySelector("#calculated-cost");

let dailyRate = 35;
let selectedDays = new Set();

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function handleDayClick(event) {
    const clickedDay = event.target;

    // Check if the day is already selected
    if (clickedDay.classList.contains("clicked")) {
        // Remove "clicked" class and update selectedDays
        clickedDay.classList.remove("clicked");
        selectedDays.delete(clickedDay.id);
    } else {
        // Add clicked class and updates selected days
        clickedDay.classList.add("clicked");
        selectedDays.add(clickedDay.id);
    }

    calculateCost(); // recalculates the total cost
}

numberofdays.forEach(day => day.addEventListener("click", handleDayClick));

// effectively creates a function to be called each time a button is clicked, first to check if it's already been selected, if it is then removes the clicked class, if it hasn't, it adds the class and changes the colour.

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearSelections() {
    // removes the clicked class from all the days
    numberofdays.forEach(day => day.classList.remove("clicked"));
    selectedDays.clear(); // clears/removes the selected days

    // resets rate buttons
    fullDayButton.classList.remove("clicked");
    halfDayButton.classList.remove("clicked");
    dailyRate = 0; // resets daily rate

    // resets calculated cost and goes back to original state
    calculatedCostText.textContent = 0;
}

clearButton.addEventListener("click", clearSelections);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function setHalfDayRate() {
    dailyRate = 20; 

    // updates the which button was clicked
    halfDayButton.classList.add("clicked");
    fullDayButton.classList.remove("clicked");

    calculateCost(); 
}

halfDayButton.addEventListener("click", setHalfDayRate);


// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function setFullDayRate() {
    dailyRate = 35; 

    fullDayButton.classList.add("clicked");
    halfDayButton.classList.remove("clicked");

    calculateCost(); 
}

fullDayButton.addEventListener("click", setFullDayRate);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculateCost() {
    // Total cost = daily rate * number of selected days
    const totalCost = dailyRate * selectedDays.size;

    // updates the displayed cost, grabs the inner html of the calculatedCostText variable, then sets it to the totalCost calculated, which is then displayed after each time the the function is called
    calculatedCostText.innerHTML = totalCost;
}
