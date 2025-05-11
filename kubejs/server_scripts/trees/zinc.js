ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:zinc_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'create:zinc_block',
            O: 'oretrees:iron_sapling',
            L: 'minecraft:oak_log'
        }
    )
})