ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:uranium_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'immersiveengineering:storage_uranium',
            O: 'oretrees:emerald_sapling',
            L: 'minecraft:oak_log'
        }
    )
})