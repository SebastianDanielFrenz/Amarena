ServerEvents.recipes(event => {
    event.shaped(
        Item.of('oretrees:ruby_sapling'),
        [
            'AAA',
            'AOA',
            ' L '
        ],
        {
            A: 'thermal:ruby_block',
            O: 'oretrees:silver_sapling',
            L: 'minecraft:oak_log'
        }
    )
})