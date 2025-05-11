ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:nickel_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:nickel_block',
            O: 'oretrees:iron_sapling',
            L: 'minecraft:oak_log'
        }
    )
})