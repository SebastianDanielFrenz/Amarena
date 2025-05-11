ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:amethyst_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'minecraft:amethyst_block',
            O: 'minecraft:oak_sapling',
            L: 'minecraft:oak_log'
        }
    )
})