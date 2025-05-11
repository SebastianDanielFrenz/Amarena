ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:glowstone_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'minecraft:glowstone',
            O: 'minecraft:crimson_fungus',
            L: 'minecraft:crimson_stem'
        }
    )
})