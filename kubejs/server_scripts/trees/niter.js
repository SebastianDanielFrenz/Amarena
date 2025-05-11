ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:niter_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:niter_block',
            O: 'oretrees:sand_sapling',
            L: 'minecraft:oak_log'
        }
    )
})