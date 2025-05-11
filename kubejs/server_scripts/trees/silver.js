ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:silver_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:silver_block',
            O: 'oretrees:gold_sapling',
            L: 'minecraft:oak_log'
        }
    )
})