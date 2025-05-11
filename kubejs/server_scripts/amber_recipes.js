ServerEvents.recipes(event => {
    /**
     * @param {Internal.ItemStack_} essence 
     * @param {Internal.ItemStack_} output
     */
    function saw(essence, output) {
        event.custom({
            type: 'mekanism:sawing',
            input: {
                ingredient: {
                    item: essence
                }
            },
            mainOutput: {
                item: output
            }
        })
    }
    /**
     * @param {Internal.ItemStack_} essence 
     * @param {Internal.ItemStack_} output
     */
    function smelt(essence, output) {
        event.smelting(output, essence)
    }

    /**
     * @param {Internal.ItemStack_} essence 
     * @param {Internal.ItemStack_} outputSaw
     * @param {Internal.ItemStack_} outputSmelt
     */
    function both(essence, outputSaw, outputSmelt) {
        saw(essence, outputSaw)
        smelt(essence, outputSmelt)
    }

    both('oretrees:coal_essence', 'minecraft:coal_ore', 'minecraft:coal')
    both('oretrees:iron_essence', 'minecraft:raw_iron', 'minecraft:iron_ingot')
    both('oretrees:copper_essence', 'minecraft:raw_copper', 'minecraft:copper_ingot')
    both('oretrees:gold_essence', 'minecraft:raw_gold', 'minecraft:gold_ingot')
    both('oretrees:redstone_essence', 'minecraft:redstone_ore', '6x minecraft:redstone')
    both('oretrees:emerald_essence', 'minecraft:emerald_ore', 'minecraft:emerald')
    both('oretrees:lapis_essence', 'minecraft:lapis_ore', '8x minecraft:lapis_lazuli')
    both('oretrees:diamond_essence', 'minecraft:diamond_ore', 'minecraft:diamond')
    both('oretrees:quartz_essence', 'minecraft:nether_quartz_ore', '2x minecraft:quartz')
    both('oretrees:ancient_essence', 'minecraft:ancient_debris', 'minecraft:netherite_scrap')
    both('oretrees:clay_essence', 'minecraft:clay', '2x minecraft:clay_ball')
    both('oretrees:sand_essence', 'minecraft:sand', 'minecraft:sand')
    both('oretrees:stone_essence', 'minecraft:stone', 'minecraft:stone')
    both('oretrees:gravel_essence', 'minecraft:gravel', 'minecraft:gravel')
    both('oretrees:glowstone_essence', 'minecraft:glowstone', '2x minecraft:glowstone_dust')
    both('oretrees:amethyst_essence', 'minecraft:amethyst_block', 'minecraft:amethyst_shard')

    both('oretrees:desh_essence', 'ad_astra:raw_desh', 'ad_astra:desh_ingot')
    both('oretrees:ice_shard_essence', 'ad_astra:moon_ice_shard_ore', 'ad_astra:ice_shard')
    both('oretrees:ostrum_essence', 'ad_astra:raw_ostrum', 'ad_astra:ostrum_ingot')
    both('oretrees:calorite_essence', 'ad_astra:raw_calorite', 'ad_astra:calorite_ingot')
    both('oretrees:demonite_essence', 'bloodmagic:rawdemonite', 'bloodmagic:ingot_hellforged')
    both('oretrees:zinc_essence', 'create:raw_zinc', 'create:zinc_ingot')
    both('oretrees:draconium_essence', 'draconicevolution:draconium_dust', 'draconicevolution:draconium_ingot')
    both('oretrees:aluminium_essence', 'immersiveengineering:raw_aluminum', 'immersiveengineering:ingot_aluminum')
    both('oretrees:uranium_essence', 'immersiveengineering:raw_uranium', 'immersiveengineering:ingot_uranium')
    both('oretrees:osmium_essence', 'mekanism:raw_osmium', 'mekanism:ingot_osmium')
    both('oretrees:fluorite_essence', 'mekanism:fluorite_ore', '3x mekanism:fluorite_gem')
    both('oretrees:uraninite_essence', 'powah:uraninite_raw', 'powah:uraninite')
    both('oretrees:dimensional_shard_essence', 'rftoolsbase:dimensionalshard', 'rftoolsbase:dimensionalshard')
    both('oretrees:apatite_essence', 'thermal:apatite_ore', 'thermal:apatite')
    both('oretrees:cinnabar_essence', 'thermal:cinnabar_ore', 'thermal:cinnabar')
    both('oretrees:niter_essence', 'thermal:niter_ore', 'thermal:niter')
    both('oretrees:tin_essence', 'thermal:raw_tin', 'thermal:tin_ingot')
    both('oretrees:lead_essence', 'thermal:raw_lead', 'thermal:lead_ingot')
    both('oretrees:silver_essence', 'thermal:raw_silver', 'thermal:silver_ingot')
    both('oretrees:nickel_essence', 'thermal:raw_nickel', 'thermal:nickel_ingot')
    both('oretrees:ruby_essence', 'thermal:ruby_ore', 'thermal:ruby')
    both('oretrees:sapphire_essence', 'thermal:sapphire_ore', 'thermal:sapphire')
    both('oretrees:cobalt_essence', 'tconstruct:raw_cobalt', 'tconstruct:cobalt_ingot')
    both('oretrees:juperium_essence', 'ad_extendra:raw_juperium', 'ad_extendra:juperium_ingot')
    both('oretrees:saturlyte_essence', 'ad_extendra:raw_saturlyte', 'ad_extendra:saturlyte_ingot')
    both('oretrees:neptunium_essence', 'ad_extendra:raw_neptunium', 'ad_extendra:neptunium_ingot')
    both('oretrees:radium_essence', 'ad_extendra:raw_radium', 'ad_extendra:radium_ingot')
    both('oretrees:plutonium_essence', 'ad_extendra:raw_plutonium', 'ad_extendra:plutonium_ingot')
    both('oretrees:electrolyte_essence', 'ad_extendra:raw_electrolyte', 'ad_extendra:electrolyte_ingot')
    both('oretrees:hellforged_parts_essence', 'bloodmagic:hellforgedparts', 'bloodmagic:hellforgedparts')


})