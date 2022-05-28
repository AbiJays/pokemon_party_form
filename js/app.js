document.addEventListener("DOMContentLoaded", () => {
    
    const newPokemonForm = document.querySelector("#new-pokemon-form");
    newPokemonForm.addEventListener("submit", handleNewFormSubmit);
    
    const deleteAllButton = document.querySelector("#delete-all");
    deleteAllButton.addEventListener("click", handleDeleteAllClick)
});

const handleNewFormSubmit = function (event) {
    event.preventDefault();
    
    const uniqueName = event.target.uniqueName.value;
    const species = event.target.species.value;
    console.dir(event.target)
    const type = event.target.checkboxObject.name;
    
    ('input[type=checkbox]').each(function () {
        if (this.checked) {
            console.log($(this).val()); 
        }
});
    const attacks = event.target.attacks.value;


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

    const partylist = document.querySelector("#party-list");
    partyList.appendChild(pokemonElement);
    
    // event.target.reset(); 
};

const handleDeleteAllClick = (event) => {
    partyList.innerHTML = ""
};

