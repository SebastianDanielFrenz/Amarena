ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:cinnabar_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:cinnabar_block',
            O: 'oretrees:coal_sapling',
            L: 'minecraft:oak_log'
        }
    )
})