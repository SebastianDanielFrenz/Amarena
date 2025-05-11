ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:osmium_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'mekanism:block_osmium',
            O: 'oretrees:copper_sapling',
            L: 'minecraft:oak_log'
        }
    )
})