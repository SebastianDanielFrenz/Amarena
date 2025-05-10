ServerEvents.recipes(event => {
    event.remove('mekanism:metallurgic_infuser')
    event.shaped(
        Item.of('mekanism:metallurgic_infuser'),
        [
            'ICI',
            'ROR',
            'IFI'
        ],
        {
            I: 'minecraft:iron_ingot',
            C: 'kubejs:core_t1',
            R: 'minecraft:redstone',
            F: 'minecraft:furnace',
            O: 'mekanism:ingot_osmium'
        }
    )

    event.remove('thermal:rf_coil')
    event.shaped(
        Item.of('thermal:rf_coil'),
        [
            '  R',
            ' C ',
            'R  '
        ],
        {
            R: 'minecraft:redstone',
            C: 'kubejs:core_t1'
        }
    )

    event.remove('thermal:redstone_servo')
    event.shaped(
        Item.of('thermal:redstone_servo'),
        [
            ' R ',
            ' C ',
            ' R '
        ],
        {
            R: 'minecraft:redstone',
            C: 'kubejs:core_t1'
        }
    )
    
})