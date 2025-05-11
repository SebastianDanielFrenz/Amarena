ServerEvents.recipes(event => {
    event.forEachRecipe({ type: 'botanypots:crop' }, recipe => {
        if (recipe.getId().startsWith("botanypots:oretrees/")) {
            recipe.json["addProperty(java.lang.String,java.lang.Number)"]("growthTicks", 601 - 1)
            console.log(recipe.json)
        }
    })

    event.remove({ id: 'lbu2:netherstar_recipe' })

    event.forEachRecipe({ type: 'crafting_shaped' }, recipe => {
        var id = recipe.getId()
        if (id.includes('botanypots:') || id.includes('botanypotstiers:')) {
            if (id.includes('_compact_')) {
                // remove unnecessary extra recipe for hopper pots
                recipe.remove()
            }
            
        }
    })
})
