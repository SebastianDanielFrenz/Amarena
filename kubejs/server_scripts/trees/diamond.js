ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:diamond_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'minecraft:diamond_block',
            O: 'oretrees:emerald_sapling',
            L: 'minecraft:diamond_ore'
        }
    )
})