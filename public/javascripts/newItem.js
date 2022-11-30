/*----- cached element references -----*/
let formEl = document.getElementById('form')
let selectedEl = document.getElementById('location');
let categoryEl = document.getElementById('category')

/*----- event listeners -----*/
selectedEl.addEventListener('change', selectedLocation);

/*----- functions -----*/
function selectedLocation(evt) {
    formEl.action= `/items/${evt.target.value}`
    if (evt.target.value === "Fridge") {
        categoryEl.innerHTML= `
        <option value="Meat">Meat</option>
        <option value="Dairy/Cheeses">Dairy/Cheeses</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Condiments">Condiments</option>
        <option value="Other">Other</option>`
    } else if (evt.target.value === "Freezer") {
        categoryEl.innerHTML=`
        <option value="Meat">Meat</option>
        <option value="Vegetables">Vegetables</option>
        <option value="Fruits">Fruits</option>
        <option value="Ready Meals">Ready Meals</option>
        <option value="Other">Other</option>`
    } else if (evt.target.value === "Pantry") {
        categoryEl.innerHTML=`
        <option value="Pasta/Grains">Pasta/Grains</option>
        <option value="Sauces">Sauces</option>
        <option value="Spices">Spices</option>
        <option value="Cans">Cans</option>
        <option value="Snacks">Snacks</option>
        <option value="Breakfast Foods">Breakfast Foods</option>
        <option value="Dry Ingredients">Dry Ingredients</option>
        <option value="Wet Ingredients">Wet Ingredients</option>
        <option value="Other">Other</option>`
    } else if (evt.target.value === "Supplies") {
        categoryEl.innerHTML=`
        <option value="General">General</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Other">Other</option>`
    }
};