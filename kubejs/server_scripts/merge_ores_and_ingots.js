ServerEvents.recipes(event => {
    /**
     * @param {Internal.ReplacementMatch_} match
     * @param {Internal.OutputReplacement_} replacement
     */
    function replaceOutput(match, replacement) {
        event.replaceOutput({}, match, replacement)
    }
    /**
     * @param {Internal.ReplacementMatch_} match
     * @param {Internal.InputReplacement_} with_
     */
    function replaceInput(match, with_) {
        event.replaceInput({}, match, with_)
    }

    // Steel
    replaceOutput('#forge:ingots/steel', 'mekanism:ingot_steel')
    replaceInput('#forge:ingots/steel', 'mekanism:ingot_steel')
    event.remove({ id: 'ad_astra:alloying/steel_ingot_from_alloying_iron_ingot_and_coals' })
    event.custom({
        type: 'ad_astra:alloying',
        cookingtime: 100,
        energy: 20,
        ingredients: [
            {
                item: 'minecraft:iron_ingot'
            },
            {
                tag: 'minecraft:coals'
            }
        ],
        result: {
            count: 1,
            id: 'mekanism:ingot_steel'
        }
    })

    let type = 'steel'

    /**
     * @param {string} name 
     */
    function removeImmersiveSmeltingNugget(name) {
        event.remove({ id: 'immersiveengineering:smelting/nugget_' + type + '_recycle_' + name })
        event.remove({ id: 'immersiveengineering:smelting/nugget_' + type + '_recycle_' + name + '_from_blasting' })
    }

    removeImmersiveSmeltingNugget("sword")
    removeImmersiveSmeltingNugget("shovel")
    removeImmersiveSmeltingNugget("steel_chestplate")
    removeImmersiveSmeltingNugget("steel_boots")
    removeImmersiveSmeltingNugget("steel_leggings")
    removeImmersiveSmeltingNugget("steel_helmet")
    removeImmersiveSmeltingNugget("pick")
    removeImmersiveSmeltingNugget("axe")

    event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_ingots' })
    event.remove({ id: 'ad_astra:compressing/steel_plate_from_compressing_steel_blocks' })
    event.custom({
        type: 'ad_astra:compressing',
        cookingtime: 800,
        energy: 20,
        ingredient: {
            tag: 'ad_astra:steel_blocks'
        },
        result: {
            count: 9,
            id: 'immersiveengineering:plate_steel'
        }
    })
    event.custom({
        type: 'ad_astra:compressing',
        cookingtime: 800,
        energy: 20,
        ingredient: {
            tag: 'ad_astra:steel_ingots'
        },
        result: {
            count: 1,
            id: 'immersiveengineering:plate_steel'
        }
    })
    event.remove({ id: 'create:pressing/steel_ingot' })
    event.remove({ id: 'createaddition:pressing/steel_ingot' })
})