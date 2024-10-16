// Function to show an alert with information about the food item
function showFoodAlert(foodName) {
    alert(`You clicked on: ${foodName}. It's a great choice for your diet!`);
}

// Function to show an alert with information about the training program
function showTrainingAlert(trainingName) {
    alert(`You clicked on: ${trainingName}. Get ready to work hard!`);
}

// Event listeners for food items
const foodItems = document.querySelectorAll('.food-item h3');
foodItems.forEach(item => {
    item.addEventListener('click', () => showFoodAlert(item.innerText));
});

// Event listeners for training programs
const trainingPrograms = document.querySelectorAll('.training-program h3');
trainingPrograms.forEach(program => {
    program.addEventListener('click', () => showTrainingAlert(program.innerText));
});
