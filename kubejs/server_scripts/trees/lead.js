ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:lead_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:lead_block',
            O: 'oretrees:copper_sapling',
            L: 'minecraft:oak_log'
        }
    )
})