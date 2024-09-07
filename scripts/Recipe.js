// Recipe creation script

// Function to add an ingredient
function addIngredient() {
    // Get the ingredient input
    const ingredientInput = document.getElementById('ingredientInput').value;

    if (ingredientInput) {
        // Create a list item to display the ingredient
        const ingredientItem = document.createElement('li');
        ingredientItem.textContent = ingredientInput;

        // Add the ingredient to the ingredient list
        document.getElementById('ingredientList').appendChild(ingredientItem);

        // Clear the input field
        document.getElementById('ingredientInput').value = '';
    }
}

// Function to add an instruction
function addInstruction() {
    // Get the instruction input
    const instructionInput = document.getElementById('instructionInput').value;

    if (instructionInput) {
        // Create a list item to display the instruction
        const instructionItem = document.createElement('li');
        instructionItem.textContent = instructionInput;

        // Add the instruction to the instruction list
        document.getElementById('instructionList').appendChild(instructionItem);

        // Clear the input field
        document.getElementById('instructionInput').value = '';
    }
}

