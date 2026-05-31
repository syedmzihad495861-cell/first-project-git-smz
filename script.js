function findRecipe() {

    let ingredient = document
    .getElementById("ingredient")
    .value
    .toLowerCase()
    .trim();

    let result = document.getElementById("result");

    if (ingredient === "potato") {
        result.innerHTML = `
        <h3> Potato Fries</h3>
        <p><b>Ingredients:</b> Potato, Oil, Salt</p>
        <p><b>Method:</b> Cut potatoes, fry in oil, add salt.</p>
        `;
    }

    else if (ingredient === "egg") {
        result.innerHTML = `
        <h3> Omelette</h3>
        <p><b>Ingredients:</b> Egg, Onion, Salt</p>
        <p><b>Method:</b> Beat eggs and fry in pan.</p>
        `;
    }

    else if (ingredient === "rice") {
        result.innerHTML = `
        <h3> Fried Rice</h3>
        <p><b>Ingredients:</b> Rice, Vegetables, Sauce</p>
        <p><b>Method:</b> Cook rice and fry with vegetables.</p>
        `;
    }

    else if (ingredient === "chicken") {
        result.innerHTML = `
        <h3> Chicken Curry</h3>
        <p><b>Ingredients:</b> Chicken, Onion, Tomato</p>
        <p><b>Method:</b> Cook chicken with spices.</p>
        `;
    }

    else if (ingredient === "tomato") {
        result.innerHTML = `
        <h3> Tomato Soup</h3>
        <p><b>Ingredients:</b> Tomato, Salt, Pepper</p>
        <p><b>Method:</b> Boil tomatoes and blend them.</p>
        `;
    }

    else {
        result.innerHTML = `
        <p> Recipe not found. Try potato, egg, rice, chicken, or tomato.</p>
        `;
    }
}