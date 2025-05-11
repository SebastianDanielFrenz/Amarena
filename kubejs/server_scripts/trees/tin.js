ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:tin_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:tin_block',
            O: 'oretrees:aluminium_sapling',
            L: 'minecraft:oak_log'
        }
    )
})