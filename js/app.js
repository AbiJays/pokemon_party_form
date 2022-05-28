document.addEventListener("DOMContentLoaded", () => {
    
    const newPokemonForm = document.querySelector("#new-pokemon-form");
    newPokemonForm.addEventListener("submit", handleNewFormSubmit);
    
    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", handleDeleteAllClick)
});

const handleNewFormSubmit = function (event) {
    event.preventDefault(); //stops it from reloading the page
    // console.log("issapokemon");
    // console.dir(event.target);
    // console.dir(event.target.species);
    // console.log(event.target.species.value)
    
    const uniqueName = event.target.uniqueName.value;
    const species = event.target.species.value;
    const type = event.target.type.value;
    const attacks = event.target.attacks.value;

    // console.log(species, type, attacks);

    const pokemonElement = document.createElement("li");

    const uniqueNameElement = document.createElement("p");
    uniqueNameElement.textContent = uniqueName;
    pokemonElement.appendChild(uniqueNameElement);

    const speciesElement = document.createElement("p");
    speciesElement.textContent = species;
    pokemonElement.appendChild(speciesElement);

    const typeElement = document.createElement("p");
    typeElement.textContent = type;
    pokemonElement.appendChild(typeElement);

    const attacksElement = document.createElement("p");
    attacksElement.textContent = attacks;
    pokemonElement.appendChild(attacksElement);

    const list = document.querySelector("#party-list");
    list.appendChild(pokemonElement);
    
    event.target.reset(); 
};

const handleDeleteAllClick = (event) => {
    const partyList = document.querySelector("#party-list");
    partyList.innerHTML = ""
};