ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:fluorite_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'mekanism:block_fluorite',
            O: 'oretrees:stone_sapling',
            L: 'minecraft:oak_log'
        }
    )
})