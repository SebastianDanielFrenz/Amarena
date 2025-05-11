ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:apatite_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:apatite_block',
            O: 'oretrees:gravel_sapling',
            L: 'minecraft:oak_log'
        }
    )
})