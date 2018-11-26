$(document).ready(function () {
    
})
$("#generate").click(function () {
    name = $("#pokeText").val()

    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon/" + name + "/",
        success: function(data) {
            const pokemonName = data.name
            const pokeAbil = data.abilities[0].ability.name
            const pokeType = data.types[0].type.name
            const pokePic = data.sprites.front_shiny
            $("#picture").attr("src",pokePic)
            $("#pokeName").html("Name: " + pokemonName)
            $("#pokeAbilities").html("Ability:" + pokeAbil)
            $("$pokeType").html("Type of Pokemon: " + pokeType)
            console.log(data)
            
        }
    })
});