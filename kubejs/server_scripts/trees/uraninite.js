ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:uraninite_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'powah:uraninite_block',
            O: 'oretrees:uranium_sapling',
            L: 'minecraft:oak_log'
        }
    )
})