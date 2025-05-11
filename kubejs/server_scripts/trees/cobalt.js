ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:cobalt_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'tconstruct:cobalt_block',
            O: 'oretrees:diamond_sapling',
            L: 'minecraft:oak_log'
        }
    )
})