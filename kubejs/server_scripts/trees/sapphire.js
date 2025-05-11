ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:sapphire_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:sapphire_block',
            O: 'oretrees:silver_sapling',
            L: 'minecraft:oak_log'
        }
    )
})