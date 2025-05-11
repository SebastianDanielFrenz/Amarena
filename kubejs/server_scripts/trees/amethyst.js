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
            O: 'oretrees:iron_sapling',
            L: 'minecraft:oak_log'
        }
    )
})