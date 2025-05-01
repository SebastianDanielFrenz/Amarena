let elements = [
    "botania:smelting/metamorphic_taiga_stone",
    "mekanism:processing/uranium/ingot/from_dust_smelting",
    "ad_astra:smelting/venus_stone_from_smelting_venus_cobblestone",
    "minecraft:sponge",
    "botania:smelting/metamorphic_swamp_stone",
    "ad_extendra:makemake_stone_from_smelting_makemake_cobblestone",
    "ad_astra:smelting/mercury_stone_from_smelting_mercury_cobblestone",
    "mekanism:processing/steel/ingot/from_dust_smelting",
    "mekanism:processing/copper/ingot/from_dust_smelting",
    "minecraft:stone",
    "ad_extendra:neptune_stone_from_smelting_neptune_cobblestone",
    "botania:smelting/metamorphic_desert_stone",
    "immersiveengineering:smelting/ingot_hop_graphite",
    "botania:smelting/metamorphic_mountain_stone",
    "ad_extendra:sedna_stone_from_smelting_sedna_cobblestone",
    "ad_astra:smelting/glacio_stone_from_smelting_glacio_cobblestone",
    "mekanism:processing/lead/ingot/from_dust_smelting",
    "mekanism:processing/gold/ingot/from_dust_smelting",
    "ad_extendra:orcus_stone_from_smelting_orcus_cobblestone",
    "mekanism:processing/iron/ingot/from_dust_smelting",
    "thermal:smelting/enderium_ingot_from_dust_smelting",
    "ad_extendra:haumea_stone_from_smelting_haumea_cobblestone",
    "mekanism:processing/bronze/ingot/from_dust_smelting",
    "tconstruct:smeltery/seared/seared_stone_smelting",
    "ad_extendra:gonggong_stone_from_smelting_gonggong_cobblestone",
    "ad_extendra:uranus_stone_from_smelting_uranus_cobblestone",
    "ad_extendra:pluto_stone_from_smelting_pluto_cobblestone",
    "mekanism:processing/osmium/ingot/from_dust_smelting",
    "deeperdarker:gloomslate",
    "mekanism:processing/tin/ingot/from_dust_smelting",
    "botania:smelting/metamorphic_plains_stone",
    "ad_extendra:jupiter_stone_from_smelting_jupiter_cobblestone",
    "thermal:smelting/lumium_ingot_from_dust_smelting",
    "botania:smelting/metamorphic_fungal_stone",
    "ad_extendra:b_stone_from_smelting_b_cobblestone",
    "ad_astra:smelting/mars_stone_from_smelting_mars_cobblestone",
    "botania:smelting/metamorphic_mesa_stone",
    "minecraft:deepslate",
    "ad_astra:smelting/moon_stone_from_smelting_moon_cobblestone",
    "ad_extendra:saturn_stone_from_smelting_saturn_cobblestone",
    "ad_extendra:eris_stone_from_smelting_eris_cobblestone",
    "deeperdarker:sculk_stone",
    "mekanism:processing/netherite/ingot_from_dust_smelting",
    "ad_extendra:ceres_stone_from_smelting_ceres_cobblestone"
]

ServerEvents.recipes(event => {

    elements.forEach(element => {
        let found = false
        event.forEachRecipe({
            type: 'minecraft:smelting',
            id: element
        }, recipe => {
            found = true

            if(!recipe.json.has("experience")) {
                throw new Error("Recipe with ID " + element + " missing experience")
            }
            recipe.json.remove("experience")
            console.log(recipe.json)
        })
        if(!found) {
            throw new Error("Recipe with ID " + element + " not found")
        }
    });
})